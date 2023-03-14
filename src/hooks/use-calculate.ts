import { useState, useEffect } from 'react';
import { getCalculateState } from '../redux/selectors/calculate';
import { setInputResult } from '../redux/slices/calculate';
import { operations } from '../utils/constants/operations';
import { TOperations } from '../utils/types/t-operations';
import { useAppDispatch } from './use-app-dispatch';
import { useAppSelector } from './use-app-selector';

function normalizeNumberToString(num: number): string {
    const str = num.toFixed(2);
    const arrNumbers = str.split('.');
    if (arrNumbers[1] === '00') {
        if (arrNumbers[0].length > 8) {
            return String(Infinity);
        } else return arrNumbers[0];
    } else {
        if (arrNumbers[0].length > 5) {
            return String(Infinity);
        }
    }
    return str.replace('.', ',');
}

function filterCommas(str: string): string {
    const arrReal = str.split(',');
    if (arrReal.length < 3) {
        return str;
    }
    return str.slice(0, -1);
}

function filterNils(str: string): string {
    if (str.length > 1) {
        const firstChar = str.charAt(0);
        const secondChar = str.charAt(1);

        if (firstChar === '0' && (secondChar === '0')) {
            return firstChar;
        }
        if (firstChar === '0' && (secondChar !== '0') && (secondChar !== ',') && !operations.includes(secondChar)) {
            return secondChar;
        }
    }

    return str;
}

function parserOperations(str: string): string {
    console.log('Parse String', str);
    const symbolsArr = str.split('');
    const isNegativeFirstOperand = symbolsArr[0] === '-' ? true : false;

    let operationsSymbols: string[] = [];

    if (isNegativeFirstOperand) {
        symbolsArr.splice(0, 1);
        operationsSymbols = symbolsArr.filter(symbol => operations.includes(symbol));
    } else {
        operationsSymbols = symbolsArr.filter(symbol => operations.includes(symbol));
    }

    if (operationsSymbols.length === 2) {

        const operands = str.split(operationsSymbols[0]);

        if (operands[0] === '') {
            operands.splice(0, 1);
            operands[0] = `-${operands[0]}`;
        }

        const firstOperand = Number(operands[0].replace(',', '.'));
        const operationSymbol = operationsSymbols[0];
        let res: number;

        if (operationsSymbols[0] === operationsSymbols[1]) {
            res = calculate(firstOperand, Number(operands[1].replace(',', '.')), operationSymbol as TOperations);
        } else {
            res = calculate(firstOperand, Number(operands[1].replace(',', '.').slice(0, -1)), operationSymbol as TOperations);
        }

        return normalizeNumberToString(res) + operationsSymbols[1];
    }

    return str;
}



function calculate(firstOperand: number, secondOperand: number, operation: TOperations) {
    console.log('firstOperand ', firstOperand);
    console.log('secondOperand ', secondOperand);
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

export const useCalculate = () => {
    const dispatch = useAppDispatch();
    const { inputResult } = useAppSelector(getCalculateState);
    const [resultCalculate, setResultCalculate] = useState('0');

    const getResult = () => resultCalculate;



    useEffect(() => {

        if (Number(inputResult) === 0) {
            setResultCalculate('0');
        }

        const strReal = parserOperations(filterNils(filterCommas(inputResult)));
        if (operations.includes(strReal.slice(-1))) {
            setResultCalculate(strReal.slice(0, -1));
            dispatch(setInputResult(strReal));

        } else {
            setResultCalculate(strReal);
            dispatch(setInputResult(strReal));
        }


    }, [inputResult]);

    return { getResult };
};