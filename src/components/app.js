import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../actions/index';
import Addnote from './addnote';
import NotesList from './notes_list';

class App extends Component {
  
    componentWillMount(){
      this.props.getNotes();
  }
  
    render() {
      return (
        <div>
      	<nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
          <div className="navbar-header">
            <div className="navbar-brand">Post-It</div>
          </div>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <Addnote />
            <NotesList notesList={this.props.notesList} />
          </div>
        </div>
      	
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { notesList: state.notes.all };
}

export default connect(mapStateToProps, { getNotes })(App);

