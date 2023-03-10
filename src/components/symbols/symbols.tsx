import { TCalculatorContainer } from '../../redux/types/t-calculator-container';
import { symbols } from '../../utils/constants/symbols';
import { DetailsGroup } from '../details-group/details-group';
import { SymbolBtn } from '../symbol-btn/symbol-btn';
import cn from 'classnames';
import './symbols';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getDetailsState } from '../../redux/selectors/details';
import { TSymbols } from '../../utils/types/t-symbols';
import { TBaseProps } from '../../redux/types/t-base-props';

export const Symbols = ({ type, onDoubleClick }: TCalculatorContainer & TBaseProps) => {
    const { details } = useAppSelector(getDetailsState);
    return (
        <DetailsGroup name="symbols" type={type} onDoubleClick={onDoubleClick}>
            <div className="grid grid-cols-3 gap-2">
                {symbols.map((symbol) => (
                    <SymbolBtn
                        key={symbol}
                        symbol={symbol as TSymbols}
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
