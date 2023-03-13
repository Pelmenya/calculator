import { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getDetailsState } from '../../redux/selectors/details';
import { setDetails, setDetailsConstructor } from '../../redux/slices/details';
import { TDetails } from '../../redux/types/t-details';
import { Display } from '../display/display';
import { EmptyConstructor } from '../empty-constructor/empty-constructor';
import { Equally } from '../equally/equally';
import { Operations } from '../operations/operations';
import { Symbols } from '../symbols/symbols';
import cn from 'classnames';
import { getCalculateState } from '../../redux/selectors/calculate';

export const Constructor = () => {
    const dispatch = useAppDispatch();
    const { result } = useAppSelector(getCalculateState);
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

    const handlerOnDoubleClick = (detail: TDetails) => {
        dispatch(setDetails([...details, detail]));
        dispatch(
            setDetailsConstructor(
                constructorList.filter((item) => item !== detail),
            ),
        );
    };

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
                        'flex w-full h-full flex-col gap-[7px] border-[2px]',
                        {
                            ['border-transparent']: !isHover,
                            ['border-dashed rounded-md bg-sky-50']: isHover,
                        },
                    )}
                >
                    {constructorList.includes('display') && (
                        <Display
                            type="constructor"
                            onDoubleClick={() =>
                                handlerOnDoubleClick('display')
                            }
                        >
                            <>{result}</>
                        </Display>
                    )}
                    {constructorList.map((detail) => {
                        switch (detail) {
                            case 'operations':
                                return (
                                    <Operations
                                        key={detail}
                                        type="constructor"
                                        onDoubleClick={() =>
                                            handlerOnDoubleClick('operations')
                                        }
                                    />
                                );
                            case 'symbols':
                                return (
                                    <Symbols
                                        key={detail}
                                        type="constructor"
                                        onDoubleClick={() =>
                                            handlerOnDoubleClick('symbols')
                                        }
                                    />
                                );
                            case 'equally':
                                return (
                                    <Equally
                                        key={detail}
                                        type="constructor"
                                        onDoubleClick={() =>
                                            handlerOnDoubleClick('equally')
                                        }
                                    />
                                );
                        }
                    })}
                </div>
            )}
        </>
    );
};
