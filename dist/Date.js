const addZero = (value) => {
    if (typeof value === "string") {
        return "0" + value;
    }
    else if (typeof value === "number") {
        return addZero(value.toString());
    }
};
Date.prototype.getTotalDate = function (isNumber) {
    const lastDate = new Date(this.getFullYear(), this.getMonth() + 1, 0);
    if (isNumber) {
        return lastDate.getDate();
    }
    return lastDate.getDate().toString();
};
Date.prototype.format = function (f, isNumber) {
    const date = this;
    const result = f.replace(/(yyyy|MM|DD|dd|hh|mm|ss)/gi, (replaced) => {
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
    });
    if (isNumber) {
        return parseInt(result);
    }
    return result;
};
//# sourceMappingURL=Date.js.map