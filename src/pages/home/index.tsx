import React from "react";
import { Col, Row } from "reactstrap";
import { inject, observer } from "mobx-react";

import SharedFoodAlert from "./components/shared-food-alert";
import TodayOrders from "./components/today-orders";
import HomePageStore from "./store/home-page-store";

interface Props {
	homePageStore?: HomePageStore;
}

function Home({ homePageStore }: Props) {
	const { sharedTodayOrders, todayOrders } = homePageStore!;

	return (
		<>
			{sharedTodayOrders.length > 0 && (
				<Row className="mt-3">
					<Col>
						<SharedFoodAlert sharedTodayOrders={sharedTodayOrders}/>
					</Col>
				</Row>
			)}
			{todayOrders.length > 0 && <TodayOrders orders={todayOrders} />}
		</>
	);
}

export default inject("homePageStore")(observer(Home));