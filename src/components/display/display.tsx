import './display.css';
import { DetailsGroup } from '../details-group/details-group';
import cn from 'classnames';
import { TBaseProps } from '../../redux/types/t-base-props';
import { TCalculatorContainer } from '../../redux/types/t-calculator-container';
import './display.css';

export const Display = ({
    children,
    type,
}: TBaseProps & TCalculatorContainer) => {
    
    return (
        <DetailsGroup name="display" type={type}>
            <div
                className={cn(
                    'flex h-[52px] bg-gray-100 rounded-md items-center justify-end',
                    'px-2 text-4xl font-extrabold text-gray-900',
                    'display-text-wrap',
                )}
            >
                {children}
            </div>
        </DetailsGroup>
    );
};
