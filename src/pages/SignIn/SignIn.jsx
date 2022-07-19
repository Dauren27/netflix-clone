import React, { useContext, useState } from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import "./SignIn.scss";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { auth } from "../../firebase/firebase";
import { FirebaseContext } from "../../context/firebase";

const SignIn = () => {
  const { firestore } = useContext(FirebaseContext);
  const navigate = useNavigate();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";
  function handleSignIn(event) {
    event.preventDefault();
    return firestore.auth().signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  }

  return (
    <>
      <div className="signin">
        <Header signIn />
        <div className="signin__content">
          <h1>Sign In</h1>
          {error && <div className="signin__error">{error}</div>}
          <form onSubmit={handleSignIn} className="signin__form">
            <input
              placeholder="Email address"
              value={emailAddress}
              onChange={(event) => setEmailAddress(event.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              value={password}
              autoComplete="off"
              onChange={(event) => setPassword(event.target.value)}
            />
            <button disabled={isInvalid}>
              Sign In
            </button>
            <p className="form__text">
              New to Netflix? <Link to="/signup"> Sign up now</Link>
            </p>
            <p className="form__smallText">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
