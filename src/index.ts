class _ {
	constructor() {
		console.log("consturctor class _");
	}
	static each = <T>(list: T[], func: Func<T>): void => {
		for (let i = 0, len = list.length; i < len; i++) {
			func(list[i], i, list);
		}
	};
	static filter = <T>(list: T[], predi: (args: T) => boolean): T[] => {
		const result: T[] = [];
		_.each(list, (item, index, list) => {
			if (predi(item)) result.push(item);
		});
		return result;
	};
	static include = <T>(list: T[], predi: (args: T) => boolean): boolean => {
		let result: boolean = false;
		_.each(list, item => {
			if (predi(item)) result = true;
		});
		return result;
	};
}

const OBJPerson: Person[] = [
	{ name: "lee", age: 24 },
	{ name: "gaon", age: 24 },
	{ name: "song", age: 25 }
];
/* function each(list: string[], func: (item: string) => void): void {
	for (let i = 0, len = list.length; i < len; i++) {
		func(list[i]);
	}
} */
/* type Func = (item: string) => void;
function each(list: string[], func: Func): void {
	for (let i = 0, len = list.length; i < len; i++) {
		func(list[i]);
	}
} */
type Func<T> = (item: T, index?: number, list?: T[]) => void;
const person_lee = _.filter(OBJPerson, person => person.name === "lee");
console.log(person_lee);
const isPersonLee = _.include(OBJPerson, person => person.name === "lee");
console.log(isPersonLee);
