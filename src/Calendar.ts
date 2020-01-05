import "./Date";

const initArray = (size: number, length: number): number[][] => {
	const result = [];
	for (let i = 0; i < length; i++) {
		result[i] = Array(size).fill(0);
	}
	return result;
};
const fillThisMonth = (
	table: number[][],
	startDay: number,
	endDate: number,
	value: number,
	week: number
): number[][] => {
	if (value > endDate) {
		return table;
	}
	table[week][startDay++] = value++;
	if (startDay === 7) {
		startDay = 0;
		week += 1;
	}
	return fillThisMonth(table, startDay, endDate, value, week);
};
export const buildCalendar = (today: Date): number[][] => {
	const tableCalendar = initArray(7, 6);

	const todayYear = today.getFullYear();
	const todayMonth = today.getMonth();
	const thisDate = new Date(todayYear, todayMonth, 1);
	const lastDate = new Date(todayYear, todayMonth + 1, 0);

	fillThisMonth(tableCalendar, thisDate.getDay(), lastDate.getDate(), 1, 0);

	return tableCalendar;
};
const date = new Date();
