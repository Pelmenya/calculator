import './mode.css';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { setMode } from '../../redux/slices/mode';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getModeState } from '../../redux/selectors/mode';
import { setInitCalculate } from '../../redux/slices/calculate';
import { ModeBtn } from './components/mode-btn/mode-btn';
import { ConstructorIcon } from './components/mode-btn/components/constructor-icon';
import { RuntimeIcon } from './components/mode-btn/components/runtime-icon';

export const Mode = () => {
    const { mode } = useAppSelector(getModeState);
    const dispatch = useAppDispatch();

    return (
        <div className="h-9 w-full box-content bg-gray-100 border border-gray-100 rounded-md flex justify-between">
            <ModeBtn
                text="Runtime"
                active={mode === 'Runtime'}
                onClick={() => {
                    dispatch(setMode('Runtime'));
                    dispatch(setInitCalculate());
                }}
            >
                <RuntimeIcon active={mode === 'Runtime'} />
            </ModeBtn>
            <ModeBtn
                text="Constructor"
                active={mode === 'Constructor'}
                onClick={() => {
                    dispatch(setMode('Constructor'));
                    dispatch(setInitCalculate());
                }}
            >
                <ConstructorIcon active={mode === 'Constructor'} />
            </ModeBtn>
        </div>
    );
};
