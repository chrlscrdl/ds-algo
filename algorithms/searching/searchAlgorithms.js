
const linearSearch = (array, targetValue) => {
	for(let value of array){
		if(value === targetValue) return true;
	}
	return false;
}

//iterative
const binarySearch = (array, targetValue) => {
	let left = 0;
	let right = array.length - 1;
	do{
		let middle = Math.floor((right + left) / 2);
		if(array[middle] === targetValue) return true;
		if(targetValue < array[middle]){
			right = middle - 1;
		}else{
			left = middle + 1;
		}
	}while(left <= right)
	return false;
}

//recursive
const binarySearchRecursive = (array, targetValue) => {
	const search = (array, targetValue) => {
		if(array.length === 0){
			return false;
		}
		let middle = Math.floor(array.length / 2);
		if(array[middle] === targetValue) return true;
		if(targetValue < array[middle]){
			return search(array.slice(0, middle), targetValue)
		}else{
			return search(array.slice(middle + 1, array.length), targetValue);
		}
	}
	return search(array, targetValue);
}


//binary search other version

// Given a sorted array arr[] with possibly some duplicates, the task is to find the first and last occurrences of an element x in the given array.

// Note: If the number x is not found in the array then return both the indices as -1.

// Examples: 

// Input : arr[] = [1, 3, 5, 5, 5, 5, 67, 123, 125], x = 5
// Output : 2 5
// Explanation: First occurrence of 5 is at index 2 and last occurrence of 5 is at index 5
const firstAndLastOccurence = (array, targetValue) => {
	
	const findFirst = (array, targetValue) => {
		let low = 0;
		let high = array.length - 1;
		let firstIndex = -1;
	
		while(low <= high){
			let middle = Math.floor((high + low) / 2);
			if(targetValue === array[middle]){
				high = middle - 1;
				firstIndex = middle;
			}else{
				if(targetValue < array[middle]){
					high = middle - 1;
				}else{
					low = middle + 1;
				}
			}
		}
		return firstIndex;
	}
	
	
	const findLast = (array, targetValue) => {
		let low = 0;
		let high = array.length - 1;
		let firstIndex = -1;
	
		while(low <= high){
			let middle = Math.floor((high + low) / 2);
			if(targetValue === array[middle]){
				low = middle + 1;
				firstIndex = middle;
			}else{
				if(targetValue < array[middle]){
					high = middle - 1;
				}else{
					low = middle + 1;
				}
			}
		}
		return firstIndex;
	}

	let first = findFirst(array, targetValue);
	let last = findLast(array, targetValue);
	return [first, last];
}

const firstTrue = (array)=>{
	//if false, go right
	let low = 0;
	let high = array.length - 1;
	let firstIndex = -1;
	while(low <= high){
		let middle = Math.floor((high + low) / 2);
		if(array[middle] === true){
			high = middle - 1;
			firstIndex = middle;
		}else{
			low = middle + 1;
		}
	}
	return firstIndex;
}



// console.log(linearSearch([1,2,3,4,5,6], 3));
// [1,2,3,4,5,6,7,8,8,9,0].forEach(val=>console.log(binarySearchRecursive([1,2,3,4,5,6], val)))
//console.log(firstAndLastOccurence([3,3,3,3,3,5], 3));
console.log(firstTrue([false,false,false,false,true,true,true]));

