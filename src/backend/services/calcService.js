const { evaluate } = require('mathjs');

class CalcService {
    static calculate(expression) {
        try {
            const result = evaluate(expression);

            if (typeof result !== 'number') {
                throw new Error(`Unexpected result type: ${typeof result}`);
            }
            if (result === Infinity || result === -Infinity) {
                throw new Error("Division by zero or overflow");
            }
            if (isNaN(result)) {
                throw new Error("Invalid mathematical operation");
            }

            return result;
        } catch (error) {
            console.error(`[CalcService Error]: ${error.message}`);
            throw new Error("Failed to evaluate expression");
        }
    }
}

module.exports = CalcService;
