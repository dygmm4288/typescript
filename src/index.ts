class _ {
	constructor() {
		console.log("consturctor class _");
	}
	static filter = <T>(list: T[], predi: (args: T) => boolean) => {
		const result: T[] = [];
		for (let i = 0, len = list.length; i < len; i++) {
			if (predi(list[i])) result.push(list[i]);
		}
		return result;
	};
}

const OBJPerson: Person[] = [
	{ name: "lee", age: 24 },
	{ name: "gaon", age: 24 },
	{ name: "song", age: 25 }
];
const name_lee = _.filter(OBJPerson, (list: Person) => list.name === "lee");
console.log(name_lee);
