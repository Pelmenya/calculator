import { operations } from '../constants/operations';
import { TOperations } from '../types/t-operations';
import { calculate } from './caculate';
import { normalizeNumberToString } from './normalize-number-to-string';

export function parseOperations(str: string, countOperationsSymbols = 2): string {
    const symbolsArr = str.split('');
    const isNegativeFirstOperand = symbolsArr[0] === '-' ? true : false;

    let operationsSymbols: string[] = [];

    if (isNegativeFirstOperand) {
        symbolsArr.splice(0, 1);
        operationsSymbols = symbolsArr.filter(symbol => operations.includes(symbol));
    } else {
        operationsSymbols = symbolsArr.filter(symbol => operations.includes(symbol));
        
    }

    if (operationsSymbols.length === countOperationsSymbols) {

        const operands = str.split(operationsSymbols[0]);
        if (operands[0] === '') {
            operands.splice(0, 1);
            operands[0] = `-${operands[0]}`;
        }

        const firstOperand = Number(operands[0].replace(',', '.'));
        const operationSymbol = operationsSymbols[0];
        let res: number;

        if (operationsSymbols[0] === operationsSymbols[1] || countOperationsSymbols === 1) {
            res = calculate(firstOperand, Number(operands[1].replace(',', '.')), operationSymbol as TOperations);
        } else {
            res = calculate(firstOperand, Number(operands[1].replace(',', '.').slice(0, -1)), operationSymbol as TOperations);
        }

        return normalizeNumberToString(res) + operationsSymbols[1];
    }

    return str;
}