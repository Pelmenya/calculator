import { TCalculatorContainer } from '../../redux/types/t-calculator-container';
import { symbols } from '../../utils/constants/symbols';
import { DetailsGroup } from '../details-group/details-group';
import { SymbolBtn } from '../symbol-btn/symbol-btn';
import cn from 'classnames';
import './symbols';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getDetailsState } from '../../redux/controllers/details';

export const Symbols = ({ type }: TCalculatorContainer) => {
    const { details } = useAppSelector(getDetailsState);
    return (
        <DetailsGroup name="symbols" type={type}>
            <div className="grid grid-cols-3 gap-2">
                {symbols.map((symbol) => (
                    <SymbolBtn
                        key={symbol}
                        className={cn(symbol === '0' ? 'col-span-2' : '', {
                            ['cursor-move']:
                                details.includes('symbols') ||
                                type === 'constructor',
                            ['cursor-no-drop']:
                                !details.includes('symbols') &&
                                type !== 'constructor',
                        })}
                    >
                        <span>{symbol}</span>
                    </SymbolBtn>
                ))}
            </div>
        </DetailsGroup>
    );
};
