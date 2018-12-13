import { moment } from "../vendors";
import Day from "../entities/day";

const SHORT_DATE_FORMAT = "L"; // "MM/DD/YYYY";

export function prettifyDate(date) {
	return moment(date).format("D MMMM YYYY, HH:mm");
}

export function prettifyDateWithSeconds(date) {
	return moment(date).format("D MMMM YYYY, HH:mm:ss");
}

export function toUTCStringDate(date) {
	return moment(date)
		.utc()
		.format();
}

export function extractDate(date) {
	return moment(date).format("DD MMMM");
}

export function extractDay(date) {
	return moment(date).format("ddd");
}

export function extractTime(date) {
	return moment(date).format("HH:mm");
}

function trimTime(date) {
	return moment(date).set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
}

export function toShortDate(date) {
	return moment(date).format(SHORT_DATE_FORMAT);
}

export function fromShortDate(shortDate) {
	return trimTime(moment(shortDate, SHORT_DATE_FORMAT));
}

export function getDayShortName(date, format = SHORT_DATE_FORMAT) {
	return moment(date, format).format("ddd");
}

function isWeekEnd(date) {
	const dayName = date.format("ddd");

	return dayName === "Sat" || dayName === "Sun";
}

export function getNextWeekWorkingDays(days) {
	const nextMonday = trimTime(
		moment()
			.add(1, "weeks")
			.isoWeekday("Monday"),
	);
	const nextFriday = trimTime(
		moment()
			.add(1, "weeks")
			.isoWeekday("Friday"),
	);

	return days.filter(day => day.toMoment().isBetween(nextMonday, nextFriday, null, "[]"));
}
