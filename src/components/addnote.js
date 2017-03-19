import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { addNote } from '../actions/index';

class AddNote extends Component {
	
	onSubmit(props){
		this.props.addNote(props);
		this.props.resetForm();
	}
	
	render(){
		const { fields: { note }, handleSubmit} = this.props;
		return (
			<div className="col-sm-3 col-md-2 sidebar">
				<div className="well">
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<div className="form-group">
						<label>Add a Note</label>
						<input type="text" className="form-control" {...note}/>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>	
				</form>
				</div>
            </div>
		);
	}	
}


export default reduxForm({
	form: 'AddNoteForm',
	fields: ['note']
}, null , { addNote })(AddNote);