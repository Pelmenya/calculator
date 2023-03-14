import { TOperations } from '../types/t-operations';

export function calculate(firstOperand: number, secondOperand: number, operation: TOperations) {
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

