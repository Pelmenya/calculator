import { operations } from '../constants/operations';

export function filterCommas(str: string): string {
    const symbolsArr = str.split('');

    if (symbolsArr[0] === '-') {
        symbolsArr.splice(0, 1);
    }
    
    const operationsSymbols = symbolsArr.filter(symbol => operations.includes(symbol));

    if (operationsSymbols.length) {
        const operands = str.split(operationsSymbols[0]);
        const arrSecondOperandSymbols = operands[1].split(',');
        if (arrSecondOperandSymbols.length < 3) {
            return str;
        }
        return operands[0] + operationsSymbols[0] + arrSecondOperandSymbols[0] + arrSecondOperandSymbols[1];

    } else {
        const arrReal = str.split(',');
        if (arrReal.length < 3) {
            return str;
        }
        return str.slice(0, -1);

    }
}
