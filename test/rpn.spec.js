var expect = require('chai').expect;
var rpn = require('../rpn.js');

describe('The rpn function', () => {
    it('should support addition', () => {
        const result = [1, 2, rpn.add].rpn();

        expect(result).equal(3);
    });

    it('should support subtraction', () => {
        const result = [5, 3, rpn.subtract].rpn();

        expect(result).equal(2);
    });

    it('should support multiplication', () => {
        const result = [2, 10, rpn.multiply].rpn();

        expect(result).equal(20);
    });

    it('should support division', () => {
        const result = [10, 2, rpn.divide].rpn();

        expect(result).equal(5);
    });

    it('should support multiple operations', () => {
        const result = [15, 7, 1, 1, rpn.add, rpn.subtract, rpn.divide, 3, rpn.multiply, 2, 1, 1, rpn.add,
            rpn.add, rpn.subtract].rpn();

        expect(result).equal(5);
    });

    it('should support polish notation', () => {
        const result = [rpn.subtract, rpn.multiply, rpn.divide, 15, rpn.subtract, 7, rpn.add, 1, 1, 3,
            rpn.add, 2, rpn.add, 1, 1].polish();

        expect(result).equal(5);
    });

    it('should support user provided operations', () => {
        function anyOperation(a, b) {
            return 2 * (a - b);
        }

        const result = [1, 2, anyOperation].rpn();

        expect(result).equal(anyOperation(1, 2));
    });
});
