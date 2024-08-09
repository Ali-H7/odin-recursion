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

function fibsRec(n, array = [0, 1]) {
  if (array.length == n) {
    return array;
  } else {
    array.push(array[array.length - 1] + array[array.length - 2]);
    return fibsRec(n, array);
  }
}

console.log(fibsRec(8));
