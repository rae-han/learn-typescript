const log = console.log;
const sArr = ['a', 'x', 'b', 'y', 'z'];
const nArr = [0, 1, 2, 3, 8, 9];
const bArr = [true, false, true, true];
const rArr = [1, 9, 'a', 'z', true];
const last = (arr) => {
    return arr[arr.length - 1];
};
log(last(sArr));
log(last(nArr));
log(last(bArr));
log(last(rArr));
const prepend = (arr, item) => [item, ...arr];
log(prepend(sArr, 'c'));
log(prepend(nArr, 1));
log(prepend(bArr, true));
log(prepend(rArr, 'random'));
const mix = (a1, a2) => [...a1, ...a2];
const stringAndNumber = mix(sArr, nArr);
console.log(stringAndNumber);
const stringAndNumberAndBoolean = mix(stringAndNumber, bArr);
console.log(stringAndNumberAndBoolean);
const count = (arr) => arr.length;
log(count(sArr));
log(count(nArr));
log(count(bArr));
log(count(rArr));
const findIndex = (arr, item) => {
    const iter = arr[Symbol.iterator]();
    let index = 0;
    let cur = null;
    while (!(cur = iter.next()).done) {
        if (item === cur.value) {
            return index;
        }
        index++;
    }
    return null;
};
log({ findIndex });
log(findIndex(sArr, '1'));
log(findIndex(sArr, 'z'));
log(findIndex(nArr, 1));
log(findIndex(bArr, true));
log(findIndex(rArr, 2));
console.log('#### #### #### ####');
const slice = (arr, sIndex, eIndex) => {
    if (!eIndex) {
        eIndex = arr.length - 1;
    }
    let result = [];
    for (let i = sIndex; i <= eIndex; i++) {
        result.push(arr[i]);
    }
    return result;
};
log(slice(sArr, 1, 2));
log(slice(nArr, 1));
log(slice(bArr, 1, 2));
log(slice(rArr, 2));
export {};
