import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteNote} from '../actions/index';

class Note extends Component {
	
	render(){
		return (
			<div className="col-md-4">
				<div onDoubleClick={this.removeNote.bind(this, this.props.note._id)} 
				className="note">{this.props.note.note}</div>
			</div>
		);
	}
	
	removeNote(i, j){
		this.props.deleteNote(i.$oid);
	}
}

export default connect(null, { deleteNote })(Note);
