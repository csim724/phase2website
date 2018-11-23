import * as React from 'react';
import Modal from 'react-responsive-modal';
import './App.css';
import MemeDetail from './components/MemeDetail';
import MemeList from './components/MemeList';
import imagelol from './img/2logo.png'

interface IState {
	currentMeme: any,
	memes: any[],
	open: boolean,
	uploadFileList: any,
}

class App extends React.Component<{}, IState> {
	constructor(props: any) {
        super(props)
        this.state = {
			currentMeme: {"id":0, "albumTitle":"Loading ","imageUrl":"","albumArtist":"","length":"","tracks":"","dateUploaded":""},
			memes: [],
			open: false,
			uploadFileList: null,
		}     	
		this.selectNewMeme = this.selectNewMeme.bind(this)
		this.fetchMemes = this.fetchMemes.bind(this)
		this.handleFileUpload = this.handleFileUpload.bind(this)

		this.fetchMemes("")	
	}

	public render() {
		const { open } = this.state;
		return (
		<div>
			<div className="header-wrapper">
				<div className="container header">
				<img src={imagelol}/>
					<div className="btn btn-primary btn-action btn-add" onClick={this.onOpenModal}>Add Album</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-7">
						<MemeDetail currentMeme={this.state.currentMeme} />
					</div>
					<div className="col-5">
						<MemeList memes={this.state.memes} selectNewMeme={this.selectNewMeme} searchByTag={this.fetchMemes}/>
					</div>
				</div>
			</div>
			<Modal open={open} onClose={this.onCloseModal}>
				<form>
					<div className="form-group">
						<label>Album title</label>
						<input type="text" className="form-control" id="meme-title-input" placeholder="Enter Album" />
					</div>
					<div className="form-group">
						<label>Artist</label>
						<input type="text" className="form-control" id="meme-tag-input" placeholder="Enter Artist" />
					</div>
					<button type="button" className="btn" onClick={this.uploadMeme}>Add album</button>
				</form>
			</Modal>
		</div>
		);
	}
	
	// Modal open
	private onOpenModal = () => {
		this.setState({ open: true });
	  };
	
	 // Modal close
	private onCloseModal = () => {
		this.setState({ open: false });
	};
	 
	// Change selected meme
	private selectNewMeme(newMeme: any) {
		this.setState({
			currentMeme: newMeme
		})
	}

	private fetchMemes(tag: any) {
		let url = "https://newyouapi.azurewebsites.net/api/album"
		if (tag !== "") {
			url += "/tag?=" + tag
		}
		fetch(url, {
			method: 'GET'
		})
		.then(res => res.json())
		.then(json => {
			let currentMeme = json[0]
			if (currentMeme === undefined) {
				currentMeme = {"id":0, "title":"No memes (╯°□°）╯︵ ┻━┻","url":"","tags":"try a different tag","uploaded":""}
			}
			this.setState({
				currentMeme,
				memes: json
			})
		});
	}

	private handleFileUpload(fileList: any) {
		this.setState({
			uploadFileList: fileList.target.files
		})
	}

	private uploadMeme = async (e: any) =>  {
		e.preventDefault()
		const titleInput = document.getElementById("meme-title-input") as HTMLInputElement
		const artistInput = document.getElementById("meme-tag-input") as HTMLInputElement


		if (titleInput === null || artistInput === null) {
			return;
		}
		const title = titleInput.value
		const artist = artistInput.value
		const apicall = await fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=21696265b369636aa72467c7674f6c43&artist=${artist}&album=${title}&format=json`)
		const data = await apicall.json();
		if (typeof(data.album) === 'undefined'){
			return;
		}
		
		const newtitle = data.album.name
		const newimage = data.album.image[5]['#text']
		const newartist = data.album.artist
		const newtracks = data.album.tracks.track.length

		const url ='https://newyouapi.azurewebsites.net/api/album/'
		const newdata = {
			id: 0,
			// tslint:disable-next-line:object-literal-sort-keys
			albumTitle: newtitle,
			imageUrl: newimage,
			albumArtist: newartist,
			tracks: newtracks
		  }
		  
		fetch(url, {
			body: JSON.stringify( newdata ),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			  },
  			method: 'POST'
		}).then((response : any) => {
			if (!response.ok) {
				// Error State
			alert(response.statusText + " " + url)
		} else {
			location.reload()
		}
		})
	}
}

export default App;
