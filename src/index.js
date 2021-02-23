import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
//import store from "./configurestore";
import store from "./store";
ReactDOM.render(
  //provider라는 컴포넌트는 반드시 store라는 프롭스를 받아야한다.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App2";
// import { Provider } from "react-redux";
// //import store from "./configurestore";
// import store from "./configurestore";
// ReactDOM.render(
//   //provider라는 컴포넌트는 반드시 store라는 프롭스를 받아야한다.
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
