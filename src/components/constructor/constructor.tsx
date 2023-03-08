import { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getDetailsState } from '../../redux/controllers/details';
import { setDetails, setDetailsConstructor } from '../../redux/slices/details';
import { TDetails } from '../../redux/types/t-details';
import { Display } from '../display/display';
import { EmptyConstructor } from '../empty-constructor/empty-constructor';
import { Equally } from '../equally/equally';
import { Operations } from '../operations/operations';
import { Symbols } from '../symbols/symbols';
import cn from 'classnames';

export const Constructor = () => {
    const dispatch = useAppDispatch();
    const { constructor, details } = useAppSelector(getDetailsState);
    const [constructorList, setConstructorList] = useState(constructor);

    const dropDetail = (detail: { name: TDetails }) => {
        const { name } = detail;
        if (!constructor.includes(name)) {
            dispatch(setDetailsConstructor([...constructor, detail.name]));
            dispatch(
                setDetails(details.filter((item) => item !== detail.name)),
            );
        }
    };

    const [{ isHover }, drop] = useDrop({
        accept: 'detail',
        drop: dropDetail,
        collect: (monitor) => ({
            isHover: monitor.isOver(),
        }),
    });

    useEffect(() => {
        setConstructorList(constructor);
    }, [setConstructorList, constructor]);

    return (
        <>
            {!constructor.length ? (
                <div
                    ref={drop}
                    className="flex w-full h-full items-center justify-center"
                >
                    <EmptyConstructor isHover={isHover} />
                </div>
            ) : (
                <div
                    ref={drop}
                    className={cn(
                        'flex w-full h-full flex-col gap-[10px] border-[2px]',
                        {
                            ['border-transparent']: !isHover,
                            ['border-dashed rounded-md bg-sky-50']: isHover,
                        },
                    )}
                >
                    {constructorList.includes('display') && (
                        <Display type='constructor'>
                            <>1</>
                        </Display>
                    )}
                    {constructorList.map((detail) => {
                        switch (detail) {
                            case 'operations':
                                return <Operations type='constructor' />;
                            case 'symbols':
                                return <Symbols type='constructor' />;
                            case 'equally':
                                return <Equally type='constructor'/>;
                        }
                    })}
                </div>
            )}
        </>
    );
};
