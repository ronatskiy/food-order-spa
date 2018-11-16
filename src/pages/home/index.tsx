import React from "react";
import { Row, Col } from "reactstrap";

import { RootContext } from "../../store";
import SharedFoodAlert from "./components/shared-food-alert";
import TodayOrdersTable from "./components/today-orders-table";
import transformToUsersOrders from "./transformators/transform-to-users-orders";
import TodayUserOrder from "../../entities/today-user-order";
import { UserOrder } from "../../entities/types";

interface Props {}

interface State {
	todayOrders: UserOrder[],
	sharedTodayOrders: UserOrder[]
}

class Home extends React.Component<Props, State> {
	public static contextType = RootContext;
	public context!: React.ContextType<typeof RootContext>;

	state: State = {
		todayOrders: [],
		sharedTodayOrders: [],
	};

	async componentDidMount() {
		const { longOperation, orderService } = this.context;
		try {
			let todayOrdersData: TodayUserOrder[] = [];
			let sharedTodayOrdersData: TodayUserOrder[] = [];

			await longOperation(async () => {
				sharedTodayOrdersData = await orderService.getSharedTodayOrders();
				todayOrdersData = await orderService.getTodayOrders();
			});

			this.setState({
				todayOrders: transformToUsersOrders(todayOrdersData ? todayOrdersData : []),
				sharedTodayOrders: transformToUsersOrders(sharedTodayOrdersData ? sharedTodayOrdersData : []),
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
