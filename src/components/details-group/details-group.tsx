import { useDrag } from 'react-dnd';
import { TBaseProps } from '../../redux/types/t-base-props';
import { TDetails } from '../../redux/types/t-details';
import cn from 'classnames';
import './details-group.css';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getDetailsState } from '../../redux/controllers/details';
import { TCalculatorContainer } from '../../redux/types/t-calculator-container';

export type TDetailsGroupProps = TBaseProps &
TCalculatorContainer & {
    name: TDetails;
};

export const DetailsGroup = ({ children, name, type }: TDetailsGroupProps) => {
    const { details, constructor } = useAppSelector(getDetailsState);
    
    const isBlocked = type === 'details' ? details.includes(name) : true;
    const isContructorDisplay = constructor.includes(name) && name === 'display';

    const [{ opacity }, dragRef] = useDrag({
        item: { name },
        type: 'detail',
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.5 : 1,
        }),
    });

    return (
        <div
            ref={isBlocked ? isContructorDisplay ? null : dragRef : null}
            className={cn('p-1 details-group bg-white', {
                ['details-group_selected']: !details.includes(name),
                ['details-group_blocked']:
                    (!details.includes(name) && type !== 'constructor') ||
                    (constructor.includes(name) && name === 'display'),
            })}
            style={isBlocked ? { opacity } : { opacity: 0.5 }}
        >
            {children}
        </div>
    );
};
