class Day {
	public shortName: string;
	public date: string;
	public isHoliday: boolean;

	constructor({ shortName, date, isHoliday }: { shortName: string; date: string; isHoliday: boolean }) {
		this.shortName = shortName;
		this.date = date;
		this.isHoliday = isHoliday;
	}
}

export default Day;
