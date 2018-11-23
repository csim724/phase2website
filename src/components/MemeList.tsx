import * as React from "react";

interface IProps {
    memes: any[],
    selectNewMeme: any,
    searchByTag: any
}

export default class MemeList extends React.Component<IProps, {}> {
    constructor(props: any) {
        super(props)
    }

	public render() {
		return (
            <div className="row meme-list-table">
                <table className="table table-striped" >
                    <tbody>
                        {this.createTable()}
                    </tbody>
                </table>
            </div>
		);
    }

    // Construct table using meme list
	private createTable() {
        const table:any[] = []
        const memeList = this.props.memes
        if (memeList == null) {
            return table
        }

        for (let i = 0; i < memeList.length; i++) {
            const children = []
            const meme = memeList[i]
            children.push(<td key={"id" + i}>{meme.id}</td>)
            children.push(<td key={"name" + i}>{meme.albumTitle}</td>)
            children.push(<td key={"tags" + i}>{meme.albumArtist}</td>)
            children.push(<td key={"tracks" + i}>{meme.tracks}</td>)
            table.push(<tr key={i+""} id={i+""} onClick= {this.selectRow.bind(this, i)}>{children}</tr>)
        }
        return table
    }
    
    // Meme selection handler to display selected meme in details component
    private selectRow(index: any) {
        const selectedMeme = this.props.memes[index]
        if (selectedMeme != null) {
            this.props.selectNewMeme(selectedMeme)
        }
    }
}