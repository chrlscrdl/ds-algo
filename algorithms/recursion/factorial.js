const factorial = (n)=>{
  if(n <= 1){
    return 1;
  }else{
    return n*factorial(n-1);
  }
}

const factorialIterative = (n)=>{
  let sum = n;
  while(n > 1){
    sum = sum * (n-1);
    n--;
  }
  return sum;
}

export { factorial, factorialIterative } 