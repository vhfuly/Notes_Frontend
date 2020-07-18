import React, {useState, useEffect, Fragment} from 'react';
import { Column, Button } from "rbx";
import {push as Menu} from 'react-burger-menu';
import List from '../notes/list';
import NotesService from '../../services/notes';
import "../../styles/notes.scss";
import Editor from "../notes/editor";
import Search from '../notes/search';

function Notes(props) {
  const [notes, setNotes] = useState([]);
  const [current_note, setCurrentNote] = useState({ title: "", body: "", id: "" });

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const response = await NotesService.index();
    if (response.data.length >= 1) {
      setNotes(response.data.reverse())
      setCurrentNote(response.data[0])
    } else{
      createNote();
    }
  }
  const searchNotes = async (query) => {
    const response = await NotesService.search(query);
    setNotes(response.data)
  }
  const createNote = async (params) => {
    const note = await NotesService.create();
    fetchNotes();
  }
  const deleteNote = async (note) => {
    await NotesService.delete(note._id);
    fetchNotes();
  }
  const updateNote = async (oldNote,params)=>{
    const updatedNote = await NotesService.update(oldNote._id, params);
    const index = notes.indexOf(oldNote);
    const newNotes = notes;
    newNotes[index] = updatedNote.data;
    setNotes(newNotes);
    setCurrentNote(updatedNote.data);
  }


  const selectNote = (id) => {
    const note = notes.find((note) => {
      return note._id == id;
    })
    setCurrentNote(note);
  }

  return (
    <Fragment>
      <div className="notes" id="notes">
        <Menu 
          pageWrapId={"notes-editor"} 
          isOpen={ props.isOpen }
          onStateChange={(state) => props.setIsOpen(state.isOpen)}
          disableAutoFocus 
          outerContainerId={"notes"}
          customBurgerIcon={ false }
          customCrossIcon={ false }
        >
          <Column.Group>
            <Column size={10} offset={1}>
            <Search searchNotes={searchNotes} fetchNotes={fetchNotes} />
            </Column>
          </Column.Group>
        
          <List
            notes={notes}
            selectNote={selectNote}
            createNote={createNote}
            current_note={current_note}
            deleteNote={deleteNote} />
            
        </Menu>


        <Column size={12} className="notes-editor" id="notes-editor">
        <Editor
          note={current_note}
          updateNote={updateNote}
        />
        </Column>
      </div>
    </Fragment>
  )
}

export default Notes;
