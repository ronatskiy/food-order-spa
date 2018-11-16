import React from "react";
import ReactDOM from "react-dom";

import App from "./app";
import "./vendors/index";
import "./index.scss";
import { Store } from "./store";
import { createServices } from "./services";
import { config } from "./config";

// TODO: Add isAuthenticated verification from cookies
const isAuthenticated = config.isAuthenticated;
const services = createServices(`${config.backendDomain}api`, isAuthenticated);
const store = new Store(services);

const rootElement = document.getElementById("root");

ReactDOM.render(<App store={store} />, rootElement);
