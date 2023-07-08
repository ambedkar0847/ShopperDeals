import React from 'react';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";

function Logout() {
    const navigate = useNavigate();

const auth = getAuth();
signOut(auth).then(() => {
    console.log("Logged out succesfully");
    alert('Logged out succesfully');
    navigate("/")
}).catch((error) => {
    console.log("Erro while Logg out");
});


  return (
    signOut

  );
}

export default Logout;
