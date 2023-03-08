import { useDrop } from 'react-dnd';
import './app.css';
import { Constructor } from './components/constructor/constructor';
import { Details } from './components/details/details';
import { EmptyConstructor } from './components/empty-constructor/empty-constructor';
import { Mode } from './components/mode/mode';

export function App() {
    const [
        ,
        dropRef,
    ] = useDrop({
        accept: 'detail',
    });

    return (
        <div className="layout" ref={dropRef}>
            <div className="mode">
                <Mode />
            </div>
            <div className="details">
                <Details />
            </div>
            <div className="constructor">
                <Constructor />
            </div>
        </div>
    );
}
