const largestSubarraySum = (arry) => {
 
  let window_start = 0;
  let current = 0;
  let max_sum = 0;
  let current_sum = 0;
  
  for(let i = current; current <= arry.length - 1; current++){
    current_sum += arry[current]
    if(current_sum > max_sum){
      max_sum = current_sum;
    } 
    // window_start += 1;
  }
    current_sum = 0;
  for(let j = 1; j <= arry.length - 1; j++){
    current_sum += arry[j];
    if(current_sum > max_sum){
      max_sum = current_sum;
    } 
  }
    return max_sum
  
  
 }
  
 //let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
  
 //function largestSubarraySum(array){
  // code to write here
 //}
 //largestSubarraySum(array)
 // 16
 // The largest subarray in this example is [5, 3, -7, 4, 5, 6], and its sum is 5 + 3 - 7 + 4 + 5 + 6 = 16
 
 