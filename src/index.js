import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App.js";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.min.css";
import store from "./app/store"; // this is the variable we have to provide to the Provider

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
); // pass the App component to the render method
// along with document.getElementById("root") as the second argument to hook our app to the root element in our index.html file

// to use links and oteher things, wrap app with router
