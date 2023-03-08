import { Display } from '../display/display';
import { Equally } from '../equally/equally';
import { Operations } from '../operations/operations';
import { Symbols } from '../symbols/symbols';

export const Details = () => {
    return (
        <>
            <Display type='details'>
                <span>0</span>
            </Display>
            <Operations type='details'/>
            <Symbols type='details'/>
            <Equally type='details'/>
        </>
    );
};
