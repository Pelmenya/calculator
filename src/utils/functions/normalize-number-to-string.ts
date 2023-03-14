export function normalizeNumberToString(num: number): string {
    const str = num.toFixed(2);
    const arrNumbers = str.split('.');
    if (arrNumbers[1] === '00') {
        if (arrNumbers[0].length > 8) {
            return String(Infinity);
        } else return arrNumbers[0];
    } else {
        if (arrNumbers[0].length > 5) {
            return String(Infinity);
        }
    }
    return str.replace('.', ',');
}