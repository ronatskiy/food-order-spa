import React, { Suspense } from "react";
import { Container } from "reactstrap";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { inject, observer } from "mobx-react";

import Route from "./smart-route";
import Header from "./header/header";
import Footer from "./footer/footer";

import SmartLoader from "./loaders/smart-loader";
import Loader from "./loaders/ellipsis-loader";
import RootStore from "../store/root-store";

const Home = React.lazy(() => import("../pages/home/index"));
const Order = React.lazy(() => import("../pages/order/index"));
const MyOrder = React.lazy(() => import("../pages/my-order/index"));
const MyWeekOrder = React.lazy(() => import("../pages/week-order/index"));
const Login = React.lazy(() => import("../pages/login/index"));

interface Props extends RouteComponentProps {
	rootStore?: RootStore;
}

function App({ rootStore }: Props) {
	const { isAuthenticated } = rootStore!.identity;

	return (
		<>
			<Header className="layout__header fixed-top" />
			<main className="layout__main">
				<Container>
					<Route
						exact
						path="/"
						component={() => (
							<Suspense fallback={<Loader />}>
								<Home />
							</Suspense>
						)}
					/>
					<Route
						path="/order/"
						isPrivate
						isAuthenticated={isAuthenticated}
						component={() => (
							<Suspense fallback={<Loader />}>
								<Order />
							</Suspense>
						)}
					/>
					<Route
						path="/my-order/"
						isPrivate
						isAuthenticated={isAuthenticated}
						component={() => (
							<Suspense fallback={<Loader />}>
								<MyOrder />
							</Suspense>
						)}
					/>
					<Route
						path="/week-order/"
						isPrivate
						isAuthenticated={isAuthenticated}
						component={() => (
							<Suspense fallback={<Loader />}>
								<MyWeekOrder />
							</Suspense>
						)}
					/>
					<Route
						path="/login/"
						component={() => (
							<Suspense fallback={<Loader />}>
								<Login />
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
