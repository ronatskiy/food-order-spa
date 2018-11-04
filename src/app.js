import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "reactstrap";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import RootContext from "./store/root-context";
import { getWeekMenu, getTodayOrders, getSharedTodayOrders, orderLunch } from "./store/web-api";
import Loader from "./components/loader";

const Home = React.lazy(() => import("./pages/home/index"));
const Order = React.lazy(() => import("./pages/order/index"));
const MyOrder = React.lazy(() => import("./pages/my-order/index"));
const MyWeekOrder = React.lazy(() => import("./pages/week-order/index"));

class App extends React.Component {
	static propTypes = {
		isAuthenticated: PropTypes.bool.isRequired,
	};

	state = {
		isAuthenticated: this.props.isAuthenticated,
		isLoading: false,
	};

	toggleAuth = () => {
		this.setState(prevState => ({
			isAuthenticated: !prevState.isAuthenticated,
		}));
	};

	longOperation = async operation => {
		this.setState({
			isLoading: true,
		});

		try {
			const result = await operation();
			this.setState({
				isLoading: false,
			});

			return result;
		} catch (e) {
			this.setState({
				isLoading: false,
			});

			throw new Error(e.message);
		}
	};

	render() {
		return (
			<BrowserRouter>
				<RootContext.Provider
					value={{
						auth: {
							isAuthenticated: this.state.isAuthenticated,
							toggleAuth: this.toggleAuth,
						},
						webApi: {
							getWeekMenu,
							getTodayOrders,
							getSharedTodayOrders,
							orderLunch,
						},
						longOperation: this.longOperation,
					}}
				>
					<Header className="layout__header fixed-top" />
					<main className="layout__main">
						<Container>
							<Route
								path="/"
								exact
								render={() => (
									<Suspense fallback={<Loader />}>
										<Home />
									</Suspense>
								)}
							/>
							<Route
								path="/order/"
								render={() => (
									<Suspense fallback={<Loader />}>
										<Order />
									</Suspense>
								)}
							/>
							<Route
								path="/my-order/"
								render={() => (
									<Suspense fallback={<Loader />}>
										<MyOrder />
									</Suspense>
								)}
							/>
							<Route
								path="/week-order/"
								render={() => (
									<Suspense fallback={<Loader />}>
										<MyWeekOrder />
									</Suspense>
								)}
							/>
						</Container>
					</main>
					<Footer className="layout__footer" />
					{this.state.isLoading && <Loader />}
				</RootContext.Provider>
			</BrowserRouter>
		);
	}
}
export default App;
