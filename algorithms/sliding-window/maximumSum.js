//finding the maximum sum of array of size k
//fixed size sliding window problem
let maximumSum = (arr, k) => {
  if(k > arr.length) return null;
  let left = 0;
  let right = k - 1;
  let maxSum = 0;
  let currentSum = 0;
  while(left < arr.length - k + 1){
    if(left === 0){
			maxSum = arr.slice(0, k).reduce((sum, current) => sum + current, 0);
			currentSum = maxSum
    }else{				
			currentSum = currentSum - arr[left - 1] + arr[right];
      maxSum = Math.max(maxSum, currentSum);
    }
    left++;
    right++;
  }
  return maxSum;
}

export { maximumSum }