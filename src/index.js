import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { FirebaseContext } from "./context/firebase";
import { firestore } from "./firebase/firebase";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <FirebaseContext.Provider value={{firestore}}>
      <App />
    </FirebaseContext.Provider>
  </Provider>
);
