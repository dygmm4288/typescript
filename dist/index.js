"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//제너릭 함수
function getFirstElem(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("getFirstElemOrNull: Arguments is not array!");
    }
    if (arr.length === 0) {
        throw new Error("getFristElemOrNull: Arguments is an empty array!");
    }
    return arr[0] ? arr[0] : null;
}
const languages = ["Typescript", "JavaScript", "React"];
const language = getFirstElem(languages);
const numbers = [1, 3, 5, 7, 9];
const number = getFirstElem(numbers);
const trueOrFalse = [true, false, true, false];
const trueValue = getFirstElem(trueOrFalse);
const persons = [
    { name: "jinho", age: 24 },
    { name: "gaon", age: 24 },
    { name: "hunseop", age: 25 }
];
const person = getFirstElem(persons);
const tuplePersons = [
    ["lee", 24, "male"],
    ["lee", 24, "female"],
    ["song", 25, "male"]
];
const tuplePerson = getFirstElem(tuplePersons);
console.log(tuplePerson);
console.log(person);
console.log(trueValue);
console.log(number);
console.log(language);
//# sourceMappingURL=index.js.map