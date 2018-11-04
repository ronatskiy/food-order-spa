import React from "react";
import { Alert, Col, Row, TabContent, TabPane } from "reactstrap";

import RootContext from "../../store/root-context";
import visibleOnlyForAuthenticatedUser from "../../hocs/visible-only-for-authenticated-user";
import TodayOrder from "./components/today-order/today-order";
import DaySwitcher from "./components/day-switcher";
import "./index.scss";

class Order extends React.Component {
	static contextType = RootContext;

	state = {
		weekMenu: [],
		selectedDay: "",
	};

	async componentDidMount() {
		const { longOperation, webApi } = this.context;
		try {
			const weekMenu = await longOperation(() => webApi.getWeekMenu());
			const [dayMenu] = weekMenu;

			this.setState({
				weekMenu,
			});

			this._switchDay(dayMenu.day.shortName);
		} catch (e) {
			console.log(e.message);
		}
	}

	_switchDay = dayName => {
		if (this.state.selectedDay !== dayName) {
			this.setState({
				selectedDay: dayName,
			});
		}
	};

	render() {
		return this.state.weekMenu.length > 0 ? (
			<Row>
				<Col>
					<DaySwitcher
						days={this.state.weekMenu.map(menu => menu.day)}
						activeDay={this.state.selectedDay}
						onSwitch={this._switchDay}
					/>
					<TabContent activeTab={this.state.selectedDay}>
						{this.state.weekMenu.map(dayMenu => {
							const { shortName, isHoliday } = dayMenu.day;

							return (
								<TabPane className="py-2" key={shortName} tabId={shortName}>
									{!isHoliday && dayMenu && <TodayOrder menu={dayMenu} />}
									{isHoliday && <Alert color="info">Заказ обедов на выходной день не доступен</Alert>}
								</TabPane>
							);
						})}
					</TabContent>
				</Col>
			</Row>
		) : (
			<Row className="my-4">
				<Col>
					<Alert color="warning">
						Заказ обеда пока не доступен! Ожидается обновление меню от поставщика...
					</Alert>
				</Col>
			</Row>
		);
	}
}

export default visibleOnlyForAuthenticatedUser(Order);
