import React from "react";
import { Row, Col } from "reactstrap";

import RootContext from "../../store/root-context";
import SharedFoodAlert from "./components/shared-food-alert";
import TodayOrdersTable from "./components/today-orders-table";
import transformToUsersOrders from "./transformators/transform-to-users-orders";

class Home extends React.Component {
	static contextType = RootContext;

	state = {
		todayOrders: [],
		sharedTodayOrders: [],
	};

	async componentDidMount() {
		const { longOperation, webApi } = this.context;
		try {
			let todayOrdersData = [];
			let sharedTodayOrdersData = [];

			await longOperation(async () => {
				sharedTodayOrdersData = await webApi.getSharedTodayOrders();
				todayOrdersData = await webApi.getTodayOrders();
			});

			this.setState({
				todayOrders: transformToUsersOrders(todayOrdersData ? todayOrdersData.weekDays: []),
				sharedTodayOrders: transformToUsersOrders(sharedTodayOrdersData ? sharedTodayOrdersData.weekDays: []),
			});
		} catch (e) {
			console.log(e.message);
		}
	}

	render() {
		return (
			<>
				{this.state.sharedTodayOrders.length > 0 && (
					<Row className="mt-3">
						<Col>
							<SharedFoodAlert sharedTodayOrders={this.state.sharedTodayOrders} />
						</Col>
					</Row>
				)}
				{this.state.todayOrders.length > 0 && <TodayOrdersTable todayOrders={this.state.todayOrders} />}
			</>
		);
	}
}

export default Home;
