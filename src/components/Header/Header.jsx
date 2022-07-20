import React from "react";
import "./Header.scss";
import { BsSearch, BsBellFill } from "react-icons/bs";
import { BiCameraMovie } from "react-icons/bi";
import { AiOutlineClose, AiOutlinePlus, AiFillHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuthListener from "../../hooks/use-auth-listener";
import { FirebaseContext } from "../../context/firebase";
import { useContext } from "react";
const Header = ({ showNav, signIn }) => {
  const { user }=useAuthListener();
  const { firestore } = useContext(FirebaseContext);
  const userName = useSelector((state) => state.authReducer.name);
  const [searchTerm, setSearchTerm] = useState("");
  const [active, setActive] = useState(false);
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);
  return (
    <div className="header">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt=""
      />
      {signIn && (
        <Link to="/signin">
          <button className="header__signin">Sign In</button>
        </Link>
      )}
      {showNav && (
        <>
          <ul className="header__navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/list">My List</Link>
            </li>
          </ul>
          <div className="header__icons">
            <BsSearch onClick={() => setActive(!active)} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                marginLeft: active ? "10px" : "0",
                padding: active ? "0 10px" : "0",
                opacity: active ? "1" : "0",
                width: active ? "200px" : "0px",
              }}
            />
            <BsBellFill />
            <img
              src="/images/users/1.png"
              alt={userName}
              className="header__img"
              onClick={() => firestore.auth().signOut()}

            />
            <div className={`${"header__dropdown"} ${dropdownActive && ".dropdown__active"}`}>
              <div className="dropdown__group">
                <img src="" alt="" className="dropdown__img" />
                <p className="dropdown__text">{userName}</p>
              </div>
              <div className="dropdown__group">
                <p className="dropdown__text">Sign Out</p>
              </div>
            </div>
          </div>
          {!hamburgerActive ? (
            <GiHamburgerMenu
              className="header__hamburger"
              onClick={() => setHamburgerActive(!hamburgerActive)}
            />
          ) : (
            <AiOutlineClose
              className="hamburger__close"
              onClick={() => setHamburgerActive(!hamburgerActive)}
            />
          )}
          {hamburgerActive && (
            <div className="header__sidebar">
              <div className="sidebar__profile">
                <img src="/images/users/1.png" alt={userName} />
                <p>{user.displayName}</p>
              </div>
              <div className="sidebar__nav">
                <ul>
                  <li>
                    <AiFillHome />
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <BsSearch />
                    <a>Search</a>
                  </li>
                  <li>
                    <AiOutlinePlus />
                    <Link to="/list">My List</Link>
                  </li>
                  <li>
                    <BiCameraMovie />
                    <a>Movies</a>
                  </li>
                </ul>
              </div>
              <div className="sidebar__settings">
                <a>Settings</a>
                <a>Exit Netflix</a>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Header;
