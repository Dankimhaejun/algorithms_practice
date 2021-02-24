const simpleGCD1 = (minNum, maxNum) => {
  for (let i = minNum; 0 < i; i--) {
    if (maxNum % i === 0 && minNum % i === 0) {
      return i;
    } 
  }

  return 1;
}

console.log('simpleGCD1(2,10)', simpleGCD1(2,10))
console.log('simpleGCD1(4,10)', simpleGCD1(4,10))
console.log('simpleGCD1(1,10)', simpleGCD1(1,10))
console.log('simpleGCD1(10,25)', simpleGCD1(10,25))

const simpleGCD2 = (minNum, maxNum) => {
  return maxNum % minNum === 0 ? minNum : simpleGCD2(maxNum % minNum, minNum);
}

console.log('simpleGCD2(2,10)', simpleGCD2(2,10))
console.log('simpleGCD2(4,10)', simpleGCD2(4,10))
console.log('simpleGCD2(1,10)', simpleGCD2(1,10))
console.log('simpleGCD2(10,25)', simpleGCD2(10,25))