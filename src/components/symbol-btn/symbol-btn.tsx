import { useCallback } from 'react';
import cn from 'classnames';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getModeState } from '../../redux/selectors/mode';
import { TBaseProps } from '../../redux/types/t-base-props';
import './symbol-btn.css';
import { TSymbols } from '../../utils/types/t-symbols';
import { TOperations } from '../../utils/types/t-operations';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import {
    setInputResult,
} from '../../redux/slices/calculate';
import { getCalculateState } from '../../redux/selectors/calculate';

export type TSymbolBtnProps = TBaseProps & {
    symbol?: TSymbols | TOperations;
};

export const SymbolBtn = ({
    children,
    className,
    symbol,
}: TSymbolBtnProps) => {
    const dispatch = useAppDispatch();
    const { mode } = useAppSelector(getModeState);
    const { inputResult } = useAppSelector(getCalculateState);

    const isRuntime = mode === 'Runtime';

    const handlerRuntime = useCallback(() => {
        dispatch(setInputResult(String(inputResult) + String(symbol)));
    }, [symbol, inputResult]);

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
