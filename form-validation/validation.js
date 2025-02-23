document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Clear previous errors
    clearErrors();
  
    // Get form values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
  
    // Validate fields
    let isValid = true;
  
    // Full Name validation
    if (fullName === '') {
      showError('fullNameError', 'Full Name is required.');
      isValid = false;
    } else if (fullName.length < 3) {
      showError('fullNameError', 'Name must be at least 3 characters.');
      isValid = false;
    }
  
    // Email validation
    if (email === '') {
      showError('emailError', 'Email is required.');
      isValid = false;
    } else if (!email.includes('@')) {
      showError('emailError', 'Enter a valid email address.');
      isValid = false;
    }
  
    // Phone Number validation
    if (phone === '') {
      showError('phoneError', 'Phone Number is required.');
      isValid = false;
    } else if (phone === '123456789') {
      showError('phoneError', 'This phone number is not allowed.');
      isValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
      showError('phoneError', 'Phone Number must be a 10-digit number.');
      isValid = false;
    }
  
    // Password validation
    if (password === '') {
      showError('passwordError', 'Password is required.');
      isValid = false;
    } else if (password.length < 8) {
      showError('passwordError', 'Password must be at least 8 characters.');
      isValid = false;
    } else if (password.toLowerCase() === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
      showError('passwordError', 'Password is too weak.');
      isValid = false;
    }
  
    // Confirm Password validation
    if (confirmPassword === '') {
      showError('confirmPasswordError', 'Confirm Password is required.');
      isValid = false;
    } else if (confirmPassword !== password) {
      showError('confirmPasswordError', 'Passwords do not match.');
      isValid = false;
    }
  
    // If all fields are valid, submit the form
    if (isValid) {
      alert('Form submitted successfully!');
      // Uncomment the line below to actually submit the form
      // this.submit();
    }
  });
  
  // Function to display error messages
  function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
  }
  
  // Function to clear all error messages
  function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');
  }

  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Perform your validation here
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        // If validation is successful, show the success message
        document.getElementById('successMessage').style.display = 'block';
    } else {
        // If validation fails, you can show an error message
        alert('Please fill out all fields.');
    }
});