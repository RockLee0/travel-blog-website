import { useState } from "react";
import { useEffect } from "react";
import initalizeFirebase from "../pages/Login/firebase/firebase.init";

import {getAuth,createUserWithEmailAndPassword,updateProfile,onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


//initialize firebase app
initalizeFirebase()
const useFirebase=()=>{

    const [user,setUser]=useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading,setIsloading]=useState(true);

    const auth = getAuth();


// register user 

    const registerUser = (email, password, name, history) => {
      setIsloading(true);
      createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              setAuthError('');
              const newUser = { email, displayName: name };
              setUser(newUser);
                // save user to the database
                saveUser(email,password, 'POST');
              // send name to firebase after creation
              updateProfile(auth.currentUser, {
                  displayName: name
              }).then(() => {
              }).catch((error) => {
              });
              history.replace('/');
          })
          .catch((error) => {
              setAuthError(error.code);
              console.log(error);
          })
          .finally(() => setIsloading(false));
  }

//login user 

const loginUser=(email,password)=>{
    setIsloading(true); 
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setAuthError('');
  })
  .catch((error) => {
    setAuthError(error.message);
  })
  .finally(()=>setIsloading(false));

}




    //observe user state 
    useEffect(()=>{
     const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
              setUser({});
            }
            setIsloading(false);
          });
          return () => unsubscribe;
    },[])








    const logout=()=>{
      setIsloading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsloading(false))
          
    }

    const saveUser = (email, password, method) => {
      const user = { email, password };
      fetch('http://localhost:5001/users', {
          method: method,
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(user)
      })
          .then(res=>res.json());
          // added res.json
  }
    
    
    return{
        user,
        registerUser,
        loginUser,
        logout,
        isLoading,
        authError
    }

}

export default useFirebase;