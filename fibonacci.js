function fibs(n) {
  const array = [0, 1];
  let sum;
  for (let i = 0; i < n - 2; i++) {
    sum = array[i] + array[i + 1];
    array.push(sum);
  }
  return array;
}

console.log(fibs(12));
