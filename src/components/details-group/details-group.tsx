import { useDrag } from 'react-dnd';
import { TBaseProps } from '../../redux/types/t-base-props';
import { TDetails } from '../../redux/types/t-details';
import cn from 'classnames';
import './details-group.css';

export type TDetailsGroupProps =  TBaseProps & {
    name: TDetails;
    isSelected?: boolean
};

export const DetailsGroup = ({ children, name, isSelected = false }: TDetailsGroupProps) => {
    const [{ opacity }, dragRef] = useDrag({
        item: { name },
        type: 'detail',
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.5 : 1,
        }),
    });

    return (
        <div
            ref={dragRef}
            className={cn('p-1 details-group', { ['details-group_selected'] : isSelected })}
            style={{ opacity }}
        >
            {children}
        </div>
    );
};
