//Business Logic

// alert("we made it this far");

function integer_to_roman(n) {
  var i, r, decimal, roman;
  r = "";
  decimal = [1,   4,   5,   9,  10,  40,  50,  90, 100, 400, 500, 900,1000];
  roman = ["I","IV", "V","IX", "X","XL", "L","XC", "C","CD", "D","CM", "M"];
  for (i = 12; i >= 0; i--) {
      
      while (n >= decimal[i]) {
        console.log(r,n);
          r += roman[i];
          n -= decimal[i];

      };
  };
  return r;
};
// };






//User Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    // alert("this one");
    var userInput = $("input#userInput").val();
    userInput = parseInt(userInput.replace(/,/g,""));
    if ((Number.isInteger(userInput) === false) || (Math.sign(userInput) !== 1) || (userInput > 3999)) {
      alert("Please enter a valid number 1-3999");
    } else $("#output").text(integer_to_roman(userInput));
  });
});
      // userInput.indexOf(",",n)) {
