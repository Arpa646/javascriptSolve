const roman = (int) => {
    // Convert Roman numerals to decimal numbers
    return int === 'I' ? 1
         : int === 'II' ? 2
         : int === 'III' ? 3
         : int === 'IV' ? 4
         : int === 'V' ? 5
         : int === 'VI' ? 6
         : int === 'VII' ? 7
         : int === 'VIII' ? 8
         : int === 'IX' ? 9
         : int === 'X' ? 10
         : ''; 
  };
  
  const result1 = roman('IV');

  
  console.log(result1); 
 
  