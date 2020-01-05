import { buildCalendar } from "./Calendar";

//제너릭 함수
function getFirstElem<T>(arr: T[]): T {
	if (!Array.isArray(arr)) {
		throw new Error("getFirstElemOrNull: Arguments is not array!");
	}
	if (arr.length === 0) {
		throw new Error("getFristElemOrNull: Arguments is an empty array!");
	}
	return arr[0] ? arr[0] : null;
}
const languages: string[] = ["Typescript", "JavaScript", "React"];
const language = getFirstElem<string>(languages);

const numbers: number[] = [1, 3, 5, 7, 9];
const number = getFirstElem<number>(numbers);

const trueOrFalse: boolean[] = [true, false, true, false];
const trueValue = getFirstElem<boolean>(trueOrFalse);

type Person = {
	name: string;
	age: number;
};
const persons: Person[] = [
	{ name: "jinho", age: 24 },
	{ name: "gaon", age: 24 },
	{ name: "hunseop", age: 25 }
];
const person = getFirstElem<Person>(persons);

type TuplePerson = [string, number, string];
const tuplePersons: TuplePerson[] = [
	["lee", 24, "male"],
	["lee", 24, "female"],
	["song", 25, "male"]
];
const tuplePerson = getFirstElem<TuplePerson>(tuplePersons);


console.log(tuplePerson);
console.log(person);
console.log(trueValue);
console.log(number);
console.log(language);
