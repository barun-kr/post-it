import React, { Component } from 'react';
import Note from './note';

class NotesList extends Component {
	
	render(){
		if(this.props.notesList.length === 0){
			return (
				<div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
					Loading...
				</div>
			);	
		}
		
		return (
			<div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
				{
					this.props.notesList.map((notes, i) => {
						return <Note note={notes} key={i} />
					})
				}
			</div>
		);
	}	
}

export default NotesList;