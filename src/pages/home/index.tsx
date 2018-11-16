import React from "react";
import { Row, Col } from "reactstrap";

import { RootStore } from "../../store";
import SharedFoodAlert from "./components/shared-food-alert";
import TodayOrdersTable from "./components/today-orders-table";
import transformToUsersOrders from "./transformators/transform-to-users-orders";
import TodayUserOrder from "../../entities/today-user-order";
import { UserOrder } from "../../entities/types";
import { inject, observer } from "mobx-react";

interface Props {
	rootStore?: RootStore;
}

interface State {
	todayOrders: UserOrder[];
	sharedTodayOrders: UserOrder[];
}

@inject("rootStore")
@observer
class Home extends React.Component<Props, State> {
	state: State = {
		todayOrders: [],
		sharedTodayOrders: [],
	};

	async componentDidMount() {
		try {
			let todayOrdersData: TodayUserOrder[] = await this.props.rootStore!.fetchTodayOrders();
			let sharedTodayOrdersData: TodayUserOrder[] = await this.props.rootStore!.fetchSharedTodayOrders();

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
