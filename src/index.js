//this is the file that renders the application to the DOM - it all starts here
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux"; //this is what binds react and redux together
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";

//we can create different reducers to handle dif aspects
//then combine them with the root reducer

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(fbConfig, { attachAuthIsReady: true }), //redux binding for firebase
    reduxFirestore(fbConfig) //redux binding for firestore
  )
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    //putting this inside the promise waits for initialization before it goes to login/logout
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
  registerServiceWorker();
});
