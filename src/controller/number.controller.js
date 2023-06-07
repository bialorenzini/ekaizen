import { seed,random,checkRandomNumber} from '../randomNumberGenerator.js';

function getList() {
    const defaultSeed = seed(192837465);
    const map = new Map();
    var number = [];

    let x;
    for(x=0;x<9;x++){
        number = Array.from(map.set(x,random()));
    };
    return number
}

export default getList