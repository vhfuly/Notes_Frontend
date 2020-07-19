import React, { Fragment, useState, useEffect } from 'react';
import HeaderLogged from "../../../components/header_logged";

import "../../../styles/notes.scss";

import Notes from "../../../components/notes";


const NotesScreen = () => {
  const [isOpen, setIsOpen]= useState(false);

 

  return(
    <Fragment>
      <HeaderLogged setIsOpen={setIsOpen} link ={"/users/edit"} path={"User Edit"} hidden={"open-button"}/>
      <Notes setIsOpen={setIsOpen} isOpen={isOpen}/>
    </Fragment>
  );
}

export default NotesScreen;