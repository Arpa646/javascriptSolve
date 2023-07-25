function findSecondSmallest(arr) {
    if (arr.length < 2) {
      // If the array has less than two elements, there's no second smallest element
      return undefined;
      
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        // If the current element is smaller than the smallest, update both smallest and secondSmallest
        secondSmallest = smallest;
        smallest = arr[i];
      } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        // If the current element is smaller than the secondSmallest but not equal to the smallest,
        // update only the secondSmallest
        secondSmallest = arr[i];
      }
    }
  
    return secondSmallest;
  }
  
  // Example usage:
  const numbers = [7, 3, 9, 2, 8, 5, 1, 6];
  const secondSmallest = findSecondSmallest(numbers);
  console.log(secondSmallest); // Output: 2
  