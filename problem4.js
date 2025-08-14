function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (i = 0; i < arr1.length; i++) {
    const item1 = arr1[i];
    const item2 = arr2[i];
    if (item1 !== item2) {
      return false;
    }
  }
  return true;
}

const sameValue = isSame([2, 5, 6], 256);
console.log(sameValue);
