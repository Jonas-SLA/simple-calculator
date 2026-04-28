const CalcService = require('../services/calcService');

const calculate = (req, res) => {
    try {
        const { expression } = req.body;
        const result = CalcService.calculate(expression);
        
        res.status(200).json({ result });
    } catch (error) {
        console.error(`[Calc Error]: ${error.message} - Input: ${req.body.expression}`);
        
        res.status(422).json({ 
            error: "Unprocessable Entity",
            message: "Unable to calculate the provided expression." 
        });
    }
};

module.exports = { calculate };
