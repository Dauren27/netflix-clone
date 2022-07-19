import React, { useContext, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import "../SignIn/SignIn.scss";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../../context/firebase";

const SignUp = () => {
  const { firestore } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = firstName === "" || password === "" || emailAddress === "";

  function handleSignIn(event) {
    event.preventDefault();
    return firestore
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
          })
          .then(() => {
            navigate("/");
          })
      )
      .catch((error) => {
        setFirstName("");
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  }
  return (
    <div className="container">
      <div className="signin">
        <Header signIn />
        <div className="signin__content">
          <h1>Sign Up</h1>
          {error && <div className="signin__error">{error}</div>}
          <form className="signin__form" onSubmit={handleSignIn}>
            <input
              placeholder="First Name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
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
            <button disabled={isInvalid}>Sign Up</button>
            <p className="form__text">
              Already a user? <Link to="/signin">Sign in now</Link>
            </p>
            <p className="form__smallText">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
