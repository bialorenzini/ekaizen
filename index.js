import { seed,random,checkRandomNumber} from './src/randomNumberGenerator.js';

const defaultSeed = seed(192837465);

const map = new Map();

let x;
for(x=0;x<9;x++){
  var number = map.set(x,random());
};

console.log(number)

