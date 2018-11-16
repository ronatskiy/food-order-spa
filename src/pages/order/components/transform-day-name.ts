export function transformDayName(day: string) {
	if (day === "Mon") {
		return "Понедельник";
	}
	if (day === "Tue") {
		return "Вторник";
	}

	if (day === "Wed") {
		return "Среда";
	}

	if (day === "Thu") {
		return "Четверг";
	}

	if (day === "Fri") {
		return "Пятница";
	}

	return "Выходной";
}
