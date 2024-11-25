// Function to validate the form
function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Check if both username and password are entered
    if (username.trim() === "") {
      alert("Please enter your username.");
      return false; // Prevent form submission
    }
  
    if (password.trim() === "") {
      alert("Please enter your password.");
      return false; // Prevent form submission
    }
  
    // If everything is filled correctly, form will be submitted
    return true;
  }
  