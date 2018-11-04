import React from "react";
import ReactDOM from "react-dom";

import App from "./app";
import "./vendors/index";
import "./index.scss";

const rootElement = document.getElementById("root");
// TODO: Add isAuthenticated verification from cookies
ReactDOM.render(<App isAuthenticated={process.env.REACT_APP_IS_AUTHENTICATED || false} />, rootElement);
