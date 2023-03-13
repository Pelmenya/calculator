import { useDrag, useDrop } from 'react-dnd';
import { TBaseProps } from '../../redux/types/t-base-props';
import { TDetails } from '../../redux/types/t-details';
import cn from 'classnames';
import './details-group.css';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getDetailsState } from '../../redux/selectors/details';
import { TCalculatorContainer } from '../../redux/types/t-calculator-container';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { setDetailsConstructor } from '../../redux/slices/details';
import { getModeState } from '../../redux/selectors/mode';

export type TDetailsGroupProps = TBaseProps &
TCalculatorContainer & {
    name: TDetails;
};

export const DetailsGroup = ({ children, name, type }: TDetailsGroupProps) => {
    const { mode } = useAppSelector(getModeState);
    const dispatch = useAppDispatch();
    const { details, constructor } = useAppSelector(getDetailsState);

    const isBlocked = type === 'details' ? details.includes(name) : true;
    const isContructorDisplay =
        constructor.includes(name) && name === 'display';

    const [{ opacity: halfOpacity }, dragRef] = useDrag({
        item: { name },
        type: 'detail',
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.5 : 1,
        }),
    });

    const handlerDrop = (dropDetail: { name: TDetails }) => {
        const indexDetail = constructor.findIndex((item) => item === name);
        const indexDropDetail = constructor.findIndex(
            (item) => item === dropDetail.name,
        );
        const arrDisposition = [...constructor];
        if (indexDetail < indexDropDetail) {
            arrDisposition.splice(indexDropDetail, 1);
            arrDisposition.splice(indexDetail, 0, dropDetail.name);
        } else {
            arrDisposition.splice(indexDetail + 1, 0, dropDetail.name);
            arrDisposition.splice(indexDropDetail, 1);
        }
        dispatch(setDetailsConstructor(arrDisposition));
    };
    const [{ opacity }, drag] = useDrag({
        item: { name },
        type: 'detail-constructor',
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0 : 1,
        }),
    });

    const [, drop] = useDrop({
        accept: 'detail-constructor',
        hover: (dropDetail: { name: TDetails }, monitor) => {
            if (!monitor.isOver()) handlerDrop(dropDetail);
        },
    });

    return (
        <div
            ref={
                mode === 'Runtime' ? null : type === 'constructor' ? drop : null
            }
            className={cn('p-1 details-group bg-white', {
                ['details-group_selected']: !details.includes(name),
                ['details-group_blocked']:
                    (!details.includes(name) && type !== 'constructor') ||
                    isContructorDisplay,
                ['detail-cursor_cursor-pointer']: mode === 'Runtime',
            })}
            style={
                isBlocked
                    ? { opacity: type === 'details' ? halfOpacity : opacity }
                    : { opacity: 0.5 }
            }
        >
            <div
                ref={
                    mode === 'Runtime'
                        ? null
                        : isBlocked
                            ? isContructorDisplay
                                ? null
                                : type === 'details'
                                    ? dragRef
                                    : drag
                            : null
                }
                className={cn('details-group-inner', {
                    ['details-group_blocked']:
                        (!details.includes(name) && type !== 'constructor') ||
                        isContructorDisplay,
                })}
            >
                {children}
            </div>
        </div>
    );
};
