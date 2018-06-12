function countPositivesSumNegatives(input) {
  let newArr = []
  let pos = 0;
  let neg = 0;
  
  if (input <= 0) {
    return newArr;
  } else {
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        pos += 1;
      } else if (input[i] < 0) {
        neg += input[i];
      }
    }
  newArr.push(pos,neg);
  return newArr;
 }
}