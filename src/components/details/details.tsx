import { Display } from '../display/display';
import { Equally } from '../equally/equally';
import { Operations } from '../operations/operations';
import { Symbols } from '../symbols/symbols';

export const Details = () => {
    return (
        <>
            <Display>
                <span>0</span>
            </Display>
            <Operations />
            <Symbols />
            <Equally />
        </>
    );
};
