const bubbleSort = (array) => {
  //a.) iterates over and over until a flag is not changed
  let isSorted = true;
  do{
    //reset isSorted
    isSorted = true;
    let i = 1;
    //loop through each pair.
    while(i < array.length){
      if(array[i] < array[i - 1]){
        //switch
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
        isSorted = false;
      }
      
      i++;
    }

  }while(!isSorted)
  return array;
}

const bubbleSortV2 = (array) => {
  //b.) for loop implementation wherein the right side is sorted. finding the largest in the group (don't remember the exact)
  for(let i = 0; i < array.length; i++){
    for(let j = 1; j < array.length - i; j++){
      if(array[j] < array[j - 1]){
        [array[j - 1], array[j]] = [array[j], array[j - 1]];
      }
    }
  }
  return array;
}

const selectionSort = (array) => {
  // keyword = s for smallest
  // iterate through the list start with the first index, find the smallest on the right side and swap to the current position.
  for(let i = 0; i < array.length; i++){
    let indexSmallest = i;
    for(let j = i + 1; j < array.length; j++){
      if(array[j] < array[indexSmallest]){
        indexSmallest = j;
      }
    }
    [array[i], array[indexSmallest]] = [array[indexSmallest], array[i]];
  }
  return array;
}

const insertionSort = (array) => {
  //among the sorting algorithms, this one sorts to the lef
  //from right to left, find the correct position.
  for(let i = 0; i < array.length; i++){
    for(let j = i+1; j > 0; j--){
      if(array[j] < array[j - 1]){
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
      }
    }
  }
  return array
}

const mergeSort = (array) => {
  let mergeRecursive = (array)=>{
    if(array.length === 1) return array;
    let middle = Math.floor(array.length / 2);
    let leftArray = array.slice(0, middle);
    let rightArray = array.slice(middle, array.length);
    return sort(mergeRecursive(leftArray), mergeRecursive(rightArray));
  }

  let sort = (leftArray, rightArray)=>{
    let i = 0;
    let j = 0;
    let sortedArray = [];
    while(i < leftArray.length && j < rightArray.length){
      if(leftArray[i] < rightArray[j]){
        sortedArray.push(leftArray[i]);
        i++
      }else{
        sortedArray.push(rightArray[j]);
        j++
      }
    }
    sortedArray.push(...leftArray.splice(i), ...rightArray.splice(j));
    return sortedArray;
  }
  return mergeRecursive(array);
}

const quickSort = (array) => {
  
  const quickSortRecursive = (array)=>{
    if(array.length === 0) return array;
    let leftArray = [];
    let rightArray = [];
    partition(leftArray, rightArray, array);
    return [...quickSortRecursive(leftArray), array[array.length - 1], ...quickSortRecursive(rightArray)]
  }

  const partition = (leftArray, rightArray, array) => {
    let pivot = array[array.length - 1];
    for(let i = 0; i < array.length - 1; i++){
      if(array[i] < pivot){
        leftArray.push(array[i]);
      }else{
        rightArray.push(array[i]);
      }
    }
  }
  return quickSortRecursive(array);
}



console.log(bubbleSort([2,3,5,6,1,4]));
console.log(bubbleSortV2([2,3,5,6,1,4]));
console.log(selectionSort([2,3,5,6,1,4]));
console.log(insertionSort([2,3,5,6,1,4]));
console.log(mergeSort([2,3,5,6,1,4]));
console.log(quickSort([2,3,5,6,1,4]));

export { bubbleSort, selectionSort, insertionSort, mergeSort, quickSort  };