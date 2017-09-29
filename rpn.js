function rpn(acc, item) {
    if (typeof item === 'function') {
        var b = acc.pop();
        var a = acc.pop();
        acc.push(item(a, b));

        return acc;
    }

    acc.push(item);
    return acc;
}

Array.prototype.rpn = function() {
    return this.reduce(rpn, [])[0];
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

module.exports = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
}
