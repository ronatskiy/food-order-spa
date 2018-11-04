import React from "react";
import { Alert, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";

import RootContext from "../../store/root-context";
import { transformDayName } from "./components/transform-day-name";
import visibleOnlyForAuthenticatedUser from "../../hocs/visible-only-for-authenticated-user";
import TodayOrder from "./components/today-order/today-order";
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

	_switchDay(dayName) {
		if (this.state.selectedDay !== dayName) {
			this.setState({
				selectedDay: dayName,
			});
		}
	}

	render() {
		return this.state.weekMenu.length > 0 ? (
			<Row>
				<Col>
					<Nav className="my-4" tabs>
						{this.state.weekMenu.map(({ day }) => {
							const { shortName } = day;
							return (
								<NavItem key={shortName}>
									<NavLink
										className={shortName === this.state.selectedDay ? "active" : ""}
										onClick={() => {
											this._switchDay(shortName);
										}}
									>
										{transformDayName(shortName)}
									</NavLink>
								</NavItem>
							);
						})}
					</Nav>
					<TabContent activeTab={this.state.selectedDay}>
						{this.state.weekMenu.map(dayMenu => {
							const { shortName } = dayMenu.day;

							return (
								<TabPane key={shortName} tabId={shortName}>
									{dayMenu && <TodayOrder menu={dayMenu} />}
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
