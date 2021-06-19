const oneAnswer = document.getElementById('result-one');
const twoAnswer = document.getElementById('result-two');
const threeAnswer = document.getElementById('result-three');

const hello  = "hello";
const howdy  = "Howdy";
const greetingsFromEarth = "Greetings from Earth";

// Functional
oneAnswer.innerText = hello.split("").reverse().join("");

// Iterative
for (var i = howdy.length - 1; i >= 0; i--) { 
    twoAnswer.innerText += howdy[i]; 
}

// Recursion
const  reverseString = (str) => {
    if (str === "") 
      return "";
    
    else
      return reverseString(str.substr(1)) + str.charAt(0);
}

threeAnswer.innerText = reverseString(greetingsFromEarth);