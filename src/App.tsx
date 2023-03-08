import './app.css';
import { Constructor } from './components/constructor/constructor';
import { Details } from './components/details/details';
import { Mode } from './components/mode/mode';
import { useAppSelector } from './hooks/use-app-selector';
import { getModeState } from './redux/controllers/mode';
import cn from 'classnames';

export function App() {
    const { mode } = useAppSelector(getModeState);
    return (
        <div className="layout">
            <div className="mode">
                <Mode />
            </div>
            <div
                className={cn('details', {
                    'details-hidden': mode === 'Runtime',
                })}
            >
                <Details />
            </div>
            <div className="constructor">
                <Constructor />
            </div>
        </div>
    );
}
