import './app.css';
import { Display } from './components/display/display';
import { Equally } from './components/equally/equally';
import { Mode } from './components/mode/mode';
import { Operations } from './components/operations/operations';
import { Symbols } from './components/symbols/symbols';

export function App() {
    return (
        <div className="layout ">
            <div className="mode"><Mode /></div>
            <div className="details">
                <Display>
                    <span>0</span>
                </Display>
                <Operations />
                <Symbols />
                <Equally />
            </div>
            <div className="constructor">constructor</div>
        </div>
    );
}
