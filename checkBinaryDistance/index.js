function checkBinaryDistance(arr, k = 2) {
  let i = 0;
  let lastIndex = -1;
  let isValid = true;

  do {
    if (arr[i] == 1) {
      if (lastIndex !== -1 && i - lastIndex <= k) {
        isValid = false;
        break;
      }
      lastIndex = i;
    }
    i++;
  } while (i < arr.length);

  return isValid;
}

exports.checkBinaryDistance = checkBinaryDistance;
