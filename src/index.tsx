import React from "react";
import ReactDOM from "react-dom";
import { configure } from "mobx";
import { Provider } from "mobx-react";
import { BrowserRouter as Router } from "react-router-dom";

import ScrollToTop from "./components/scroll-to-top";
import App from "./app";
import "./vendors/index";
import "./index.scss";
import { RootStore } from "./store";
import { createServices } from "./services";
import { config } from "./config";

configure({ enforceActions: "always" });

// TODO: Add isAuthenticated verification from cookies
const isAuthenticated = config.isAuthenticated;
const services = createServices(`${config.backendDomain}api`, isAuthenticated);
const store = new RootStore(services);

const rootElement = document.getElementById("root");

ReactDOM.render(
	<Provider rootStore={store}>
		<Router>
			<ScrollToTop>
				<App />
			</ScrollToTop>
		</Router>
	</Provider>,
	rootElement,
);
