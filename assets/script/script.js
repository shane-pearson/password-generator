    // Adding the characters the gernerator can choose from
    var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
    var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
    var passwordLength = "";
    var specialCharacter;
    var numbers;
    var upperCase;
    var lowerCase;

    // Allowing the button click to generate the password. 
    var generateBtn = document.querySelector("#generate");

  function generatePassword() {
        //added prompt to chose how many characters. Integer to make sure its a number. 10 at the end to be on a 1-10 scale. 
        var passwordLength = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"), 10)
        //if statement to make sure a number is selected. If not error and rerun to prompt. 
        if (Number.isNaN(passwordLength)) {
          alert('please enter a number')
          return;
        }
        //alert in case a password under 8 characters is selected. Will return if under 8.
        if (passwordLength < 8) {
          alert('password must be 8 characters or more')
          return;
        }
        //alert in case a password over 128 characters is selected. Will return if over 128. 
        if (passwordLength > 128) {
          alert('password must be 128 characters or less')
          return;
        }
  
        //added confirm box for if user wants lower case letters. OK to confirm
        var lowerCase = confirm("click OK to use lowercase characters in your password");
        //added confirm box for if users wants upper case letters. OK to confirm
        var upperCase = confirm("click OK to use uppercase characters in your password");
        //added confirm box for if the user wants numbers. OK to confirm
        var numbers = confirm("Click OK to Include Numbers in your password");
        //added confirm box for if the users want special characters. OK to confirm
        var specialCharacter = confirm("Click OK to use Special Characters in your password");
  
        // If none of the prompts are added an alert will prompt you to choose one. 
        while(upperCase === false && lowerCase === false && specialCharacter === false && numbers === false) {
          alert("You must choose at least one parameter");
          var specialCharacter = confirm("Click OK to confirm if you would like to include special characters");
          var numbers = confirm("Click OK to confirm if you would like to include numeric characters");    
          var lowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
          var upperCase = confirm("Click OK to confirm if you would like to include uppercase characters"); 
        }

        // Creating a varible that will combine the password arrays if user chose to include. 
        var passwordCharacters = []
      
        if (specialCharacter) {
          passwordCharacters = passwordCharacters.concat(specialChar)
        }
    
        if (numbers) {
          passwordCharacters = passwordCharacters.concat(number)
        }
          
        if (lowerCase) {
          passwordCharacters = passwordCharacters.concat(alphaLower)
        }
    
        if (upperCase) {
          passwordCharacters = passwordCharacters.concat(alphaUpper)
        }
    
          console.log(passwordCharacters)
    
          var randomPassword = ""
          
          //Taking our random password varible adding it to password characters selected. Then adding a mathrandom function to randomly combine the password arrays with the length
          //of the password.  And finally returning the value of that password. 
          for (var i = 0; i < passwordLength; i++) {
            randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
            console.log(randomPassword)
          }
          return randomPassword;

  }
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
  
    passwordText.value = password;
  }
  
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  