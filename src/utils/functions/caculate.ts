import { TOperations } from '../types/t-operations';

export function calculate(firstOperand: number, secondOperand: number, operation: TOperations) {
    console.log('firstOperand ', firstOperand);
    console.log('secondOperand ', secondOperand);
    console.log('operation', operation);

    switch (operation) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case 'x':
            return firstOperand * secondOperand;
        case '/':
            return firstOperand / secondOperand;
        default:
            return NaN;
    }
}

