import { useState, useEffect } from 'react';
import { getCalculateState } from '../redux/selectors/calculate';
import { setInputResult } from '../redux/slices/calculate';
import { operations } from '../utils/constants/operations';
import { filterCommas } from '../utils/functions/filter-commas';
import { filterNils } from '../utils/functions/filter-nils';
import { parseOperations } from '../utils/functions/parse-operations';
import { useAppDispatch } from './use-app-dispatch';
import { useAppSelector } from './use-app-selector';

export const useCalculate = () => {
    const dispatch = useAppDispatch();
    const { inputResult } = useAppSelector(getCalculateState);
    const [resultCalculate, setResultCalculate] = useState('0');

    const getResult = () => resultCalculate;

    useEffect(() => {

        if (Number(inputResult) === 0) {
            setResultCalculate('0');
        }

        const strReal = parseOperations(filterNils(filterCommas(inputResult)));
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