import { longestSubArray } from "./longestSubArray.js";
import { maximumSum } from "./maximumSum.js";

export const runSlidingWindowTest = () => {
  console.log('=== Run Sliding Window Test ===\n');
  let sampleArray = [5,3,1,2,4,5,7];
  console.log('Regular Sliding Window');
  console.log(maximumSum(sampleArray, 3))
  console.log("\n")
  console.log('Dynamic Sliding Window');
  console.log(longestSubArray(sampleArray, 12))
}	  