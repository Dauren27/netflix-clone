import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import "./Profile.scss";
import { AiFillPlusCircle } from "react-icons/ai";
import firebase from "firebase/compat/app";
import { useNavigate } from "react-router";
import { auth, firestore } from "../../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";

function Profile() {
  const navigate = useNavigate();
  //const photoUrl=useSelector()
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const isAuth=useSelector(state=>state.authReducer.isAuth)

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    dispatch({ type: "ADD_USER", payload: user });
    dispatch({ type: "GET_USER_INFO", payload: user });
    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem('isAuth',JSON.stringify(isAuth))
    navigate("/");
    console.log(user._delegate.photoURL);
  };
  const LogIn = () => {
    navigate("/");
  };
  return (
    <div className="profile">
      <Header className="header" />
      <div className="profile__container">
        <h1>Who's watching?</h1>
        <div className="profiles">
          {users.map((image, index) => (
            <img
              onClick={() => LogIn()}
              src={image._delegate.photoURL}
              key={index}
            />
          ))}
          <div>
            <AiFillPlusCircle onClick={login} />
          </div>
        </div>
        <button className="profile__button">Manage Profiles</button>
      </div>
    </div>
  );
}

export default Profile;
