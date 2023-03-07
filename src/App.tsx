import './app.css';
import { Display } from './components/display/display';
import { Operations } from './components/operations/operations';
import { Symbols } from './components/symbols/symbols';

export function App() {
    return (
        <div className="layout ">
            <div className="mode">mode</div>
            <div className="details">
                <Display>
                    <span>0</span>
                </Display>
                <Operations />
                <Symbols />
            </div>
            <div className="constructor">constructor</div>
        </div>
    );
}
