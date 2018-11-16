import React, { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "reactstrap";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import Loader from "./components/loader";
import { Store, RootContext } from "./store";

const Home = React.lazy(() => import("./pages/home/index"));
const Order = React.lazy(() => import("./pages/order/index"));
const MyOrder = React.lazy(() => import("./pages/my-order/index"));
const MyWeekOrder = React.lazy(() => import("./pages/week-order/index"));

interface Props {
	store: Store;
}

interface State {
	store: Store;
	isLoading: boolean;
}

class App extends React.Component<Props, State> {
	public state: State = {
		store: this.props.store,
		isLoading: false,
	};

	longOperation = async (operation: () => Promise<any>) => {
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
					value={
						this.state.store

						// webApi: {
						// 	getWeekMenu,
						// 	getTodayOrders,
						// 	getSharedTodayOrders,
						// 	orderLunch,
						// },
					}
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
