function fibs(n) {
  if (n <= 1) {
    return [0];
  }
  const array = [0, 1];
  let sum;
  for (let i = 0; i < n - 2; i++) {
    sum = array[i] + array[i + 1];
    array.push(sum);
  }
  return array;
}

console.log(fibs(16));

function fibsRec(n, array = [0, 1]) {
  if (n <= 1) {
    return [0];
  }

  if (array.length == n) {
    return array;
  } else {
    array.push(array[array.length - 1] + array[array.length - 2]);
    return fibsRec(n, array);
  }
}

console.log(fibsRec(8));
