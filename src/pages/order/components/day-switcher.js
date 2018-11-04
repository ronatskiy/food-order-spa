import React, { Component } from "react";
import PropTypes from "prop-types";
import { Nav } from "reactstrap";

import DayTab from "./day-tab";
import Day from "../../../entities/day";

class DaySwitcher extends Component {
	static propTypes = {
		days: PropTypes.arrayOf(PropTypes.instanceOf(Day)).isRequired,
		activeDay: PropTypes.string.isRequired,
		onSwitch: PropTypes.func.isRequired,
	};

	render() {
		const { days, activeDay, onSwitch } = this.props;

		return (
			<Nav className="my-4" tabs>
				{days.map(day => {
					const { shortName } = day;
					return <DayTab key={shortName} day={day} isActive={shortName === activeDay} onClick={onSwitch} />;
				})}
			</Nav>
		);
	}
}

export default DaySwitcher;
