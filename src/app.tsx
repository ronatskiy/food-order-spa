import React, { Suspense } from "react";
import { Container } from "reactstrap";
import { Route, withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import SmartLoader from "./components/loaders/smart-loader";
import Loader from "./components/loaders/ellipsis-loader";

const Home = React.lazy(() => import("./pages/home/index"));
const Order = React.lazy(() => import("./pages/order/index"));
const MyOrder = React.lazy(() => import("./pages/my-order/index"));
const MyWeekOrder = React.lazy(() => import("./pages/week-order/index"));

function App() {
	return (
		<>
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
			<SmartLoader />
		</>
	);
}

export default inject("rootStore")(withRouter(observer(App)));
