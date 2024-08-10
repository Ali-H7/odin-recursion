function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  const middlePoint = Math.floor(array.length / 2);
  const leftArray = mergeSort(array.slice(0, middlePoint));
  const rightArray = mergeSort(array.slice(middlePoint));

  return merge(leftArray, rightArray);
}

function merge(leftArray, rightArray) {
  const mergedArray = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      mergedArray.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < leftArray.length) {
    mergedArray.push(leftArray[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < rightArray.length) {
    mergedArray.push(rightArray[rightIndex]);
    rightIndex++;
  }

  return mergedArray;
}

const sortArray = [3, 2, 1, 13, 8, 5, 0, 1];
console.log(mergeSort(sortArray));
