var letters = /^[1-9]*$/;
      var result= "true";
      function validateForm() {
        let name = document.forms["myForm"]["fname"].value;
        if (name == "") {
          alert("Name must be filled out");
          return false;
        }
        if (name.match(letters) ) {
          alert("Name must contain characters only");
          return false;
        }

        let age = document.forms["myForm"]["fage"].value;
        if (age<0) {
          alert("Age must not be negative");
          return false;
        }

        let email = document.forms["myForm"]["femail"].value;
        if (email == "") {
          alert("Please enter Email Id");
          return false;
        }

        let mobile = document.forms["myForm"]["fmobile"].value;
        if (mobile.length != 10) {
          alert("Mobile number must be of 10 digits");
          return false;
        }

        let resume = document.forms["myForm"]["fresume"].value;
        if (resume == "") {
          alert("Please upload your resume");
          return false;
        }

        let linkedin = document.forms["myForm"]["flinkedin"].value;
        if (linkedin == "") {
          alert("Please enter linkedIn URL");
          return false;
        }

        let github = document.forms["myForm"]["fgithub"].value;
        if (github == "") {
          alert("Please enter github repository URL");
          return false;
        } 

        if (result == "true") {
          alert("Form submitted sucessfully!");
          return true;
        } 
      }
