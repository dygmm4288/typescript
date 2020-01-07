class _ {
    constructor() {
        console.log("consturctor class _");
    }
}
_.each = (list, func) => {
    for (let i = 0, len = list.length; i < len; i++) {
        func(list[i], i, list);
    }
};
_.filter = (list, predi) => {
    const result = [];
    _.each(list, (item, index, list) => {
        if (predi(item))
            result.push(item);
    });
    return result;
};
_.include = (list, predi) => {
    let result = false;
    _.each(list, item => {
        if (predi(item))
            result = true;
    });
    return result;
};
const OBJPerson = [
    { name: "lee", age: 24 },
    { name: "gaon", age: 24 },
    { name: "song", age: 25 }
];
const person_lee = _.filter(OBJPerson, person => person.name === "lee");
console.log(person_lee);
const isPersonLee = _.include(OBJPerson, person => person.name === "lee");
console.log(isPersonLee);
//# sourceMappingURL=index.js.map