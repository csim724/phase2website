import * as React from "react";
import Modal from 'react-responsive-modal';

let global = {"album":{"name":"Kid A","artist":"Radiohead","mbid":"b13f061a-bd3c-3aaf-9a60-64a0c6f7aee5","url":"https://www.last.fm/music/Radiohead/Kid+A","image":[{"#text":"https://lastfm-img2.akamaized.net/i/u/34s/248cb85037351002251836e5f2f0d76b.png","size":"small"},{"#text":"https://lastfm-img2.akamaized.net/i/u/64s/248cb85037351002251836e5f2f0d76b.png","size":"medium"},{"#text":"https://lastfm-img2.akamaized.net/i/u/174s/248cb85037351002251836e5f2f0d76b.png","size":"large"},{"#text":"https://lastfm-img2.akamaized.net/i/u/300x300/248cb85037351002251836e5f2f0d76b.png","size":"extralarge"},{"#text":"https://lastfm-img2.akamaized.net/i/u/300x300/248cb85037351002251836e5f2f0d76b.png","size":"mega"},{"#text":"https://lastfm-img2.akamaized.net/i/u/300x300/248cb85037351002251836e5f2f0d76b.png","size":""}],"listeners":"1414311","playcount":"41919902","tracks":{"track":[{"name":"Everything in Its Right Place","url":"https://www.last.fm/music/Radiohead/_/Everything+in+Its+Right+Place","duration":"462","@attr":{"rank":"1"},"streamable":{"#text":"0","fulltrack":"0"},"artist":{"name":"Radiohead","mbid":"a74b1b7f-71a5-4011-9441-d0b5e4122711","url":"https://www.last.fm/music/Radiohead"}},{"name":"Kid A","url":"https://www.last.fm/music/Radiohead/_/Kid+A","duration":"284","@attr":{"rank":"2"},"streamable":{"#text":"0","fulltrack":"0"},"artist":{"name":"Radiohead","mbid":"a74b1b7f-71a5-4011-9441-d0b5e4122711","url":"https://www.last.fm/music/Radiohead"}},{"name":"The National Anthem","url":"https://www.last.fm/music/Radiohead/_/The+National+Anthem","duration":"351","@attr":{"rank":"3"},"streamable":{"#text":"0","fulltrack":"0"},"artist":{"name":"Radiohead","mbid":"a74b1b7f-71a5-4011-9441-d0b5e4122711","url":"https://www.last.fm/music/Radiohead"}},{"name":"How to Disappear Completely","url":"https://www.last.fm/music/Radiohead/_/How+to+Disappear+Completely","duration":"356","@attr":{"rank":"4"},"streamable":{"#text":"0","fulltrack":"0"},"artist":{"name":"Radiohead","mbid":"a74b1b7f-71a5-4011-9441-d0b5e4122711","url":"https://www.last.fm/music/Radiohead"}},{"name":"Treefingers","url":"https://www.last.fm/music/Radiohead/_/Treefingers","duration":"222","@attr":{"rank":"5"},"streamable":{"#text":"0","fulltrack":"0"},"artist":{"name":"Radiohead","mbid":"a74b1b7f-71a5-4011-9441-d0b5e4122711","url":"https://www.last.fm/music/Radiohead"}},{"name":"Optimistic","url":"https://www.last.fm/music/Radiohead/_/Optimistic","duration":"316","@attr":{"rank":"6"},"streamable":{"#text":"0","fulltrack":"0"},"artist":{"name":"Radiohead","mbid":"a74b1b7f-71a5-4011-9441-d0b5e4122711","url":"https://www.last.fm/music/Radiohead"}},{"name":"In Limbo","url":"https://www.last.fm/music/Radiohead/_/In+Limbo","duration":"211","@attr":{"rank":"7"},"streamable":{"#text":"0","fulltrack":"0"},"artist":{"name":"Radiohead","mbid":"a74b1b7f-71a5-4011-9441-d0b5e4122711","url":"https://www.last.fm/music/Radiohead"}},{"name":"Idioteque","url":"https://www.last.fm/music/Radiohead/_/Idioteque","duration":"309","@attr":{"rank":"8"},"streamable":{"#text":"0","fulltrack":"0"},"artist":{"name":"Radiohead","mbid":"a74b1b7f-71a5-4011-9441-d0b5e4122711","url":"https://www.last.fm/music/Radiohead"}},{"name":"Morning Bell","url":"https://www.last.fm/music/Radiohead/_/Morning+Bell","duration":"254","@attr":{"rank":"9"},"streamable":{"#text":"0","fulltrack":"0"},"artist":{"name":"Radiohead","mbid":"a74b1b7f-71a5-4011-9441-d0b5e4122711","url":"https://www.last.fm/music/Radiohead"}},{"name":"Motion Picture Soundtrack","url":"https://www.last.fm/music/Radiohead/_/Motion+Picture+Soundtrack","duration":"419","@attr":{"rank":"10"},"streamable":{"#text":"0","fulltrack":"0"},"artist":{"name":"Radiohead","mbid":"a74b1b7f-71a5-4011-9441-d0b5e4122711","url":"https://www.last.fm/music/Radiohead"}}]},"tags":{"tag":[{"name":"albums I own","url":"https://www.last.fm/tag/albums+I+own"},{"name":"electronic","url":"https://www.last.fm/tag/electronic"},{"name":"favorite albums","url":"https://www.last.fm/tag/favorite+albums"},{"name":"alternative","url":"https://www.last.fm/tag/alternative"},{"name":"experimental","url":"https://www.last.fm/tag/experimental"}]},"wiki":{"published":"04 Jun 2008, 17:47","summary":"Kid A is the fourth studio album by the English rock band Radiohead, released on 2 October 2000 by Parlophone. On the verge of a breakdown after promoting Radiohead's 1997 album OK Computer, songwriter Thom Yorke envisioned a radical change in direction. Radiohead replaced their rock sound with synthesisers, drum machines, the ondes Martenot, string orchestras and brass instruments, incorporating influences from genres such as electronic music, krautrock, jazz, and 20th-century classical music. <a href=\"http://www.last.fm/music/Radiohead/Kid+A\">Read more on Last.fm</a>.","content":"Kid A is the fourth studio album by the English rock band Radiohead, released on 2 October 2000 by Parlophone. On the verge of a breakdown after promoting Radiohead's 1997 album OK Computer, songwriter Thom Yorke envisioned a radical change in direction. Radiohead replaced their rock sound with synthesisers, drum machines, the ondes Martenot, string orchestras and brass instruments, incorporating influences from genres such as electronic music, krautrock, jazz, and 20th-century classical music. They recorded Kid A with OK Computer producer Nigel Godrich in Paris, Copenhagen, Gloucestershire and their hometown Oxford, England. The sessions produced over 20 tracks; Radiohead saved many of them for their subsequent album, Amnesiac, released the following year.\n\nRadiohead released no singles or music videos to promote Kid A and conducted few interviews and photoshoots, instead becoming one of the first major acts to use the internet as a promotional tool. The album was made available to stream and was promoted with short animated films featuring music and artwork. Bootlegs of early performances were shared on filesharing services and the album was leaked before release.\n\nKid A debuted at the top of the charts in Britain, where it went platinum in the first week, and it became Radiohead's first number-one album in the United States. Like OK Computer, it won a Grammy for Best Alternative Album and was nominated for Album of the Year. Its departure from Radiohead's earlier sound initially divided fans and critics, but it later attracted widespread acclaim; at the turn of the decade, Rolling Stone, Pitchfork and the Times ranked Kid A the greatest album of the 2000s, and in 2012, Rolling Stone ranked it number 67 on its list of the 500 greatest albums of all time. <a href=\"http://www.last.fm/music/Radiohead/Kid+A\">Read more on Last.fm</a>. User-contributed text is available under the Creative Commons By-SA License; additional terms may apply."}}}
let globalSummary = ""
const synth = window.speechSynthesis;

interface IProps {
    currentMeme: any
}

interface IState {
    open: boolean
    open2: boolean
}

export default class MemeDetail extends React.Component<IProps, IState> {

    constructor(props: any) {
        super(props)   
        this.state = {
            open: false,
            open2: false
        }


    }

	public render() {
        const currentMeme = this.props.currentMeme
        const { open , open2 } = this.state;
		return (
			<div className="container meme-wrapper">
                <div className="row meme-date">
                    {currentMeme.uploaded}
                </div>
                <div className="row meme-img">
                    <img style={{width: 600, height: 600}} src={currentMeme.imageUrl}/>
                </div>
                <div className="row meme-heading">
                    <b>{currentMeme.albumTitle}</b>&nbsp; {currentMeme.albumArtist}
                </div>
                
                
                <div className="row meme-done-button">
                    <div className="btn btn-primary btn-action" data-modal="modal-window-one" onClick={this.onOpenModal2}>Tracklisting </div>
                    <div className="btn btn-primary btn-action" data-modal="modal-window-two" onClick={this.onOpenModal}>Edit </div>
                    <div className="btn btn-primary btn-action2" onClick={this.deleteMeme.bind(this, currentMeme.id)}>Delete </div>
                </div>
                <Modal open={open2} onClose={this.onCloseModal2} >
                    <form className="modal-window-one">
                        <div className="modal-window-one">
                            {this.stringo()}
                            <button type="button" className="btn" onClick={this.readSummary}>Read out summary 🔊</button>
                        </div>
                    </form>
                </Modal>
                <Modal open={open} onClose={this.onCloseModal}>
                    <form className="modal-window-two">
                        <div className="modal-window-two">
                            <label>Album Title</label>
                            <input type="text" className="form-control" id="meme-edit-title-input" placeholder="Enter Album Title"/>
                        </div>
                        <div className="modal-window-two">
                            <label>Album Artist</label>
                            <input type="text" className="form-control" id="meme-edit-tag-input" placeholder="Enter Album Artist"/>
                        </div>
                        <button type="button" className="btn" onClick={this.updateMeme}>Save</button>
                    </form>
                </Modal>
            </div>
		);
    }

    // Modal Open
    public onOpenModal = () => {
        this.setState({ open: true });
        synth.cancel()
    };

    // Modal Open
    public onOpenModal2 = () => {
        this.setState({ open2: true });
        synth.cancel()
    };

    // Modal Close
    public onCloseModal = () => {
        this.setState({ open: false });
        synth.cancel()
    };

    // Modal Close
    public onCloseModal2 = () => {
        this.setState({ open2: false });
        synth.cancel()
    };


    private deleteMeme(id: any) {
        const url = "https://newyouapi.azurewebsites.net/api/album/" + id
    
        fetch(url, {
            method: 'DELETE'
        })
        .then((response : any) => {
            if (!response.ok) {
                // Error Response
                alert(response.statusText)
            }
            else {
                location.reload()
            }
        })
    }

    private updateMeme = async (e: any) =>  {
		e.preventDefault()
		const titleInput = document.getElementById("meme-edit-title-input") as HTMLInputElement
		const artistInput = document.getElementById("meme-edit-tag-input") as HTMLInputElement


		if (titleInput === null || artistInput === null) {
			return;
        }
        const currentMeme = this.props.currentMeme
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
			id: currentMeme.id,
			// tslint:disable-next-line:object-literal-sort-keys
			albumTitle: newtitle,
			imageUrl: newimage,
			albumArtist: newartist,
			tracks: newtracks
		  }
		  
		fetch(url + currentMeme.id, {
			body: JSON.stringify( newdata ),
			headers: {'cache-control': 'no-cache','Content-Type': 'application/json'},
  			method: 'PUT'
		})
		.then((response : any) => {
			if (!response.ok) {
				// Error State
				alert(response.statusText + " " + url)
			} else {
				location.reload()
			}
          })
    }
    
    private stringo(){
        const currentMeme = this.props.currentMeme
        const title = currentMeme.albumTitle
        const artist = currentMeme.albumArtist
        fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=21696265b369636aa72467c7674f6c43&artist=${artist}&album=${title}&format=json`)
        .then(results =>{
            return results.json()
        })
        .then(data =>{
            global = data
        })
        if (typeof(global.album) === 'undefined' || typeof(global.album.wiki.summary) === 'undefined' ){
			return;
		}
        let result = ""
        result = result + global.album.name + " by " + global.album.artist + "\n"
        let i = 0
        for(i = 0; i < global.album.tracks.track.length ; i++){
            result = result + String(i + 1) + ". " + global.album.tracks.track[i].name + " " + String(Math.floor(Number(global.album.tracks.track[i].duration)/60)) + ":" + ("0"+ String(Number(global.album.tracks.track[i].duration)%60)).slice(-2) + "\n"
        }
        let total = 0
        for(i = 0; i < global.album.tracks.track.length ; i++){
            total = total + Number(global.album.tracks.track[i].duration)
        }
        result = result + "Total length: " + String(Math.floor(total/60)) + ":" + ("0"+ String((total)%60)).slice(-2) + "\n"
        result = result + global.album.wiki.summary + "\n"
        globalSummary = global.album.wiki.summary
        return result
    }

    private readSummary(){
        const texttext = new SpeechSynthesisUtterance(globalSummary);
        synth.speak(texttext);
    }
}