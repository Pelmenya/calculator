import './equally.css';
import { DetailsGroup } from '../details-group/details-group';
import { TCalculatorContainer } from '../../redux/types/t-calculator-container';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { getDetailsState } from '../../redux/selectors/details';
import { getModeState } from '../../redux/selectors/mode';
import { TBaseProps } from '../../redux/types/t-base-props';

export const Equally = ({ type, onDoubleClick }: TCalculatorContainer & TBaseProps) => {
    const { mode } = useSelector(getModeState);
    const { details } = useSelector(getDetailsState);
    return (
        <DetailsGroup name="equally" type={type} onDoubleClick={onDoubleClick}>
            <button
                onClick={() => {}}
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
                <span>=</span>
            </button>
        </DetailsGroup>
    );
};
