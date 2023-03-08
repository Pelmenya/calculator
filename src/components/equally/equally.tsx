import './equally.css';
import { DetailsGroup } from '../details-group/details-group';
import { TCalculatorContainer } from '../../redux/types/t-calculator-container';

export const Equally = ({ type }: TCalculatorContainer) => {
    return (
        <DetailsGroup name="equally" type={type}>
            <button onClick={() => {}} className="flex w-full items-center justify-center h-16 rounded-md equally text-white bg-iris-100">
                <span>=</span>
            </button>
        </DetailsGroup>
    );
};
