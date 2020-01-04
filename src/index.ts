const addZero = (value: any): string => {
	if (typeof value === "string") {
		return "0" + value;
	} else if (typeof value === "number") {
		return addZero(value.toString());
	}
};
type formatType = string | number;
interface Date {
	format(f: string, isNumber?: boolean): formatType;
}

Date.prototype.format = function(f: string, isNumber?: boolean): formatType {
	const date = this;
	const result = f.replace(
		/(yyyy|MM|DD|dd|hh|mm|ss)/gi,
		(replaced: string): string => {
			switch (replaced) {
				case "yyyy":
					return date.getFullYear().toString();
				case "MM":
					return (date.getMonth() + 1).toString();
				case "DD":
					return date.getDate().toString();
				case "dd":
					return date.getDay().toString();
				case "hh":
					const h = date.getHours();
					return h < 10 ? addZero(h) : h.toString();
				case "mm":
					const m = date.getMinutes();
					return m < 10 ? addZero(m) : m.toString();
				case "ss":
					const s = date.getSeconds();
					return s < 10 ? addZero(s) : s.toString();
			}
		}
	);
	if (isNumber) {
		return parseInt(result);
	}
	return result;
};

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
const buildCalendar = (today: Date): number[][] => {
	const tableCalendar = initArray(7, 6);

	const todayYear = today.getFullYear();
	const todayMonth = today.getMonth();
	const thisDate = new Date(todayYear, todayMonth, 1);
	const lastDate = new Date(todayYear, todayMonth + 1, 0);
	const prevDate = new Date(todayYear, todayMonth, 0);
	console.log(thisDate.getDay(), lastDate.getDate());
	console.log(
		fillThisMonth(
			tableCalendar,
			thisDate.getDay(),
			lastDate.getDate(),
			1,
			0
		)
	);

	return tableCalendar;
};
const date = new Date();
buildCalendar(date);
