import React, { Fragment, useState, useEffect } from 'react';
import HeaderLogged from "../../../components/header_logged";
import { Column } from "rbx";
import "../../../styles/notes.scss";
import UsersService from '../../../services/users';

import Notes from "../../../components/notes";


const NotesScreen = () => {
  const [isOpen, setIsOpen]= useState(false);

  const [user, setUser] = useState('');
  
  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    const jasonUser =window.localStorage.getItem('user')
    const user =JSON.parse(jasonUser);
    setUser(user.name)
      
    console.log(user.name)
  }


  return(
    <Fragment>
      <HeaderLogged setIsOpen={setIsOpen} user={user}/>
      <Notes setIsOpen={setIsOpen} isOpen={isOpen}/>
    </Fragment>
  );
}

export default NotesScreen;