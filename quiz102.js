// 4. Write a JavaScript function that accepts an array as an argument, and returns a new array that is sorted.

$(document).ready(function() {

  var inputArray = [];
  var sortedArray = [];
  var outputArray = [];
  


  function sorted(inputArray) {
    sortedArray = inputArray.sort(function(a, b){return a-b}) 
    return(sortedArray);
    // console.log(sortedArray);

}
// Write a JavaScript function that accepts an array, and returns a new array that contains elements in the array you passed in that are larger than 25.
 function largerThan25(sorted) {
   console.log(sorted);
  for (var i = 0; i < sorted.length; i++) {
    if (sorted[i] > 25) {
    outputArray.push(sorted[i]);
   
    }
  }

}
// 7. Attach an event handler to the button click.
$("#click").click(function() {
  var input = $(".input").val();
  var array = input.split(",");
  sorted(array);
  largerThan25(sortedArray);
  var divString = "";
  for (var i = 0; i < outputArray.length; i++) {
     console.log(outputArray[i]);
        
        divString += '<div class="number">' + outputArray[i] + '</div>';
        // console.log(divString);
      };    
         $("#output").append(divString);  
  });
    
});


  // 8. When the button is clicked retrieve the value of the input box. You should enter in a comma-delimited list of integers (e.g. 10,3,5,67,22,etc..).
  // 9. Convert that string of comma-delimited numbers into an array.
  // 10. Pass that array into the function that finds numbers higher than 25.
  // 11. The array that is the result of that, pass it into the function that sorts the array.
  // 12. Loop over the sorted array and create a DOM string that wraps a <div> element around each number (e.g. output += something).
  
  // 13. Give each <div> a class of "number".
  // 

