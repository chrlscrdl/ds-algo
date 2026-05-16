//dynamic size sliding window
//for each element, add current value to the sum iteratively
//if sum is greater than s, remove the leftmost element and check again
//compare sum and best
const longestSubArray = (arr, s) => {
  let left = -1;
  let right = 0;
  let sum = 0;
  let maxLength = 0;
  let tempArr = [];
  while(right < arr.length){
    sum += arr[right];
    while(sum >= s){
      left++;
      sum -= arr[left];
    }
    
    maxLength = Math.max(maxLength, right - left);
    
    tempArr.push(String(left) + '-' + String(right));
    right++;
  }
  console.log(tempArr);
  return maxLength;
}

export { longestSubArray }