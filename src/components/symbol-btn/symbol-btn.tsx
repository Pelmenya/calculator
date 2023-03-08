import { useCallback } from 'react';
import cn from 'classnames';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getModeState } from '../../redux/controllers/mode';
import { TBaseProps } from '../../redux/types/t-base-props';
import './symbol-btn.css';
import { TSymbols } from '../../utils/types/t-symbols';
import { TOperations } from '../../utils/types/t-operations';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import {
    setOperation,
    setResult,
    setSymbol,
} from '../../redux/slices/calculate';
import { getCalculateState } from '../../redux/controllers/calculate';

export type TSymbolBtnProps = TBaseProps & {
    symbol?: TSymbols;
    operation?: TOperations;
};

export const SymbolBtn = ({
    children,
    className,
    symbol,
    operation,
}: TSymbolBtnProps) => {
    const dispatch = useAppDispatch();
    const { mode } = useAppSelector(getModeState);
    const {
        result,
    } = useAppSelector(getCalculateState);

    const isRuntime = mode === 'Runtime';

    const handlerRuntime = useCallback(() => {
        if (symbol) {
            dispatch(setSymbol(symbol));
            if (result === '0') {
                dispatch(setResult(`${symbol}`));
            } else if (result.split('').includes(',') && symbol === ',') {
                dispatch(setResult(`${result}`));
            } else dispatch(setResult(`${result + symbol}`));
        }
        if (operation) {
            dispatch(setOperation(operation));
        }
    }, [symbol, operation, result]);

    return (
        <button
            onClick={isRuntime ? handlerRuntime : undefined}
            className={cn('symbol-btn', className, {
                ['symbol-btn_runtime']: mode === 'Runtime',
            })}
        >
            {children}
        </button>
    );
};
