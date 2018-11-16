import React from "react";
import { Nav } from "reactstrap";

import DayTab from "./day-tab";
import Day from "../../../entities/day";

interface Props {
	days: Day[];
	activeDay: string;
	onSwitch(dayName: string): void;
}

function DaySwitcher(props: Props) {
	const { days, activeDay, onSwitch } = props;

	return (
		<Nav className="my-4" tabs>
			{days.map(day => {
				const { shortName } = day;

				return <DayTab key={shortName} day={day} isActive={shortName === activeDay} onClick={onSwitch} />;
			})}
		</Nav>
	);
}

export default DaySwitcher;
