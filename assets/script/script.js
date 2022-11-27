    // Adding the characters the gernerator can choose from
    var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
    var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
  function getUserPasswordOptions() {
        //added prompt to chose how many characters
        var passwordLength = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"), 10)
        //if statement to make sure a number is selected. 
        if (Number.isNaN(passwordLength)) {
          alert('please enter a number')
          return;
        }
        //alert in case a password under 9 characters is selected. 
        if (passwordLength < 8) {
          alert('password must be 8 chars or more')
          return;
        }
        //alert in case a password over 128 characters is selected. 
        if (passwordLength > 128) {
          alert('password must be 128 chars or less')
          return;
        }
  
        //added confirm box for if the want lower case letters
        var lowerCase = confirm("click OK to use lowercase characters in your password");
        //added confirm box for if the want upper case letters
        var upperCase = confirm("click OK to use uppercase characters in your passwor");
        //added confirm box for if the want numbers
        var numbers = confirm("Click OK to Include Numbers in your password");
        //added confirm box for if the want special characters
        var specialCharacters = confirm("Click OK to use Special Characters in your password");
  
  
        // make sure a user has selected at least one type of character 
  
  
        var userPasswordOptions = {
          passwordLength: passwordLength,
          lowerCase: lowerCase, 
          upperCase: upperCase,
          numbers: numbers,
          specialCharacters: specialCharacters,
        }
  
        return userPasswordOptions
  }
  
  function getRandomArrayElement(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    var randomElement = array[randomIndex]
  
    return randomElement
  }
  
  
  // Defining Generate Password
  function generatePassword() {   
  var usersOptions = getUserPasswordOptions() 
  
  // add variablw to store password result in real time
  var result = "";
  // include two more variables for potential and confirmed characters
  
  // write a check to make sure the password options are not empty 
  
  // add if statemnt that takes users chosen selection and adds to potential chars array, then use random function to push some array leements to confirmed characters array
  
  // repeatt he above line for all charater array types
  
  
  // return that variable
    
  }
    
  
  
  
  
  var generateBtn = document.querySelector("#generate");
  
  
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  
  
  generateBtn.addEventListener("click", writePassword);
  