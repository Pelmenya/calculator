import { symbols } from '../../utils/constants/symbols';
import { DetailsGroup } from '../details-group/details-group';
import { SymbolBtn } from '../symbol-btn/symbol-btn';
import './symbols';

export const Symbols = () => (
    <DetailsGroup name='symbols'>
        <div className="grid grid-cols-3 gap-2">
            {symbols.map((symbol) => (
                <SymbolBtn
                    key={symbol}
                    className={symbol === '0' ? 'col-span-2' : ''}
                >
                    <span>{symbol}</span>
                </SymbolBtn>
            ))}
        </div>
    </DetailsGroup>
);
