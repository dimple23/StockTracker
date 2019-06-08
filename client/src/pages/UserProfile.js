import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Jumbotron from '../components/Jumbotron';
import { getNoteById, createNote, updateNote } from '../utils/API';

class Profile extends Component {
  // set up state to handle note's body, title, id
  state = {
    title: '',
    body: '',
    id: '',
    isLoggedIn: false
  };

  componentDidMount() {
    // for class components use THIS.PROPS to get props 
    console.log(this.props);

    if (this.props.match.params.id) {
      // extract id of note out of this.props.match.params.id
      const noteId = this.props.match.params.id;

      getNoteById(noteId)
        .then(({ data: noteData }) => {
          this.setState({
            id: noteData._id,
            title: noteData.title,
            body: noteData.body
          });
        })
        .catch(err => console.log(err));
    }

  }



  // method for creating/POSTing a note
  handleCreateNote = noteInfo => {
    createNote(noteInfo)
      .then(() => {
        alert("  created successfully");
        this.setState({
          noteSaved: true
        });
      })
      .catch(err => console.log(err));
  }

  // method for updating/PUTting a note
  handleUpdateNote = (noteId, noteInfo) => {
    updateNote(noteId, noteInfo)
      .then(() => {
        alert("Note created successfully");
        this.setState({
          noteSaved: true
        });
      })
      .catch(err => console.log(err));
  }

  // handleInputChange
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    // if this.state.id exists, run update method
    if (this.state.id) {
      this.handleUpdateNote(this.state.id, {title: this.state.title, body: this.state.body});
    }
    // else just create a new note
    else {
      this.handleCreateNote({
        title: this.state.title,
        body: this.state.body
      });
    }

  }

  render() {
    // if note has been saved, let's redirect to the home page
    if (this.state.noteSaved) {
      return <Redirect to="/" />
    }

    return (
      <React.Fragment>
        <Jumbotron 
          pageTitle={(this.state.id) ? "Update your note!" : "Add a new note!"}
          fluid
          bg="default"
          text="dark"
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8">
              <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Note Title</label>
                  <input 
                    type="text"
                    onChange={this.handleInputChange}
                    value={this.state.title}
                    name="title"
                    placeholder="Note title"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="body">Note Body</label>
                  <textarea
                    onChange={this.handleInputChange}
                    value={this.state.body}
                    name="body"
                    placeholder="Note body"
                    className="form-control"
                  >
                  </textarea>
                </div>
                <button type="submit" className="btn btn-lg btn-success">Save Note</button>
              </form>
            </div>
          </div>
        
        </div>

      </React.Fragment>
    )
  }
}

export default Profile;
