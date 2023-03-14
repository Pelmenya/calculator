import { useCallback } from 'react';
import './equally.css';
import { DetailsGroup } from '../details-group/details-group';
import { TCalculatorContainer } from '../../redux/types/t-calculator-container';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { getDetailsState } from '../../redux/selectors/details';
import { getModeState } from '../../redux/selectors/mode';
import { TBaseProps } from '../../redux/types/t-base-props';
import { equallySymbol } from '../../utils/constants/equally-symbol';
import { useAppSelector } from '../../hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { getCalculateState } from '../../redux/selectors/calculate';
import { setInputResult } from '../../redux/slices/calculate';

export const Equally = ({
    type,
    onDoubleClick,
}: TCalculatorContainer & TBaseProps) => {
    const dispatch = useAppDispatch();
    const { mode } = useSelector(getModeState);
    const { details } = useSelector(getDetailsState);
    const { inputResult } = useAppSelector(getCalculateState);

    const isRuntime = mode === 'Runtime';

    const handlerRuntime = useCallback(() => {
        dispatch(setInputResult(String(inputResult) + String(equallySymbol)));
    }, [inputResult]);

    return (
        <DetailsGroup name="equally" type={type} onDoubleClick={onDoubleClick}>
            <button
                onClick={isRuntime ? handlerRuntime : undefined}
                className={cn(
                    'flex w-full items-center justify-center h-16 rounded-md equally text-white bg-iris-100',
                    {
                        ['cursor-move']:
                            details.includes('equally') ||
                            type === 'constructor',
                        ['cursor-no-drop']:
                            !details.includes('equally') &&
                            type !== 'constructor',
                        ['cursor-pointer']: mode === 'Runtime',
                    },
                )}
            >
                <span>{equallySymbol}</span>
            </button>
        </DetailsGroup>
    );
};
