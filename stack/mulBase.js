import Stack from './index';

const mulBase = (num, base) => {
  const s = new Stack();
  do {
    s.push(num % base);
    num = Math.floor(num /= base);
  }while(num > 0);

  let converted = '';
  while (s.length()) {
    converted += s.pop();
  }
  return converted;
}

let num = 32;
let base = 2;
let newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum);

num = 125;
base = 8;
newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum);
