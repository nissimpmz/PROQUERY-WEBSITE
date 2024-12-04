  // Elements
  const loginBtn = document.getElementById('login-btn');
  const logoutBtn = document.getElementById('logout-btn');
  const signUpForm = document.getElementById('sign-up-form');
  const closeSignUpForm = document.getElementById('close-signup-form');
  
  // Get the advance dropdown items (links) inside the dropdown
  const advanceLink = document.getElementById('advance-link');
  const advanceItems = document.querySelectorAll('#advance-dropdown .dropdown__link'); // Only the links in the Advance dropdown
  
  let isLoggedIn = false; // A flag to track login status
  
  // Show the login form when the "Log In" button is clicked
  function showLoginForm() {
     signUpForm.style.display = 'block';
  }
  
  // Close the login form
  closeSignUpForm.addEventListener('click', function() {
     signUpForm.style.display = 'none';
  });
  
  // Handle login form submission
  document.getElementById('login-form').addEventListener('submit', function(event) {
     event.preventDefault();
     const email = document.getElementById('email').value;
     const password = document.getElementById('password').value;
  
     if (email && password) {
        // Simulate login success
        isLoggedIn = true;
        signUpForm.style.display = 'none';
  
        // Update header to show Log Out button
        updateHeader();
  
        alert("Logged in successfully!");
     } else {
        alert("Please fill in both fields.");
     }
  });
  
  // Update the header based on login status
  function updateHeader() {
     if (isLoggedIn) {
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
        unlockAdvanceDropdown();
     } else {
        loginBtn.style.display = 'inline-block';
        logoutBtn.style.display = 'none';
        lockAdvanceDropdown();
     }
  }
  
  // Logout the user
  function logout() {
     isLoggedIn = false;
     updateHeader();
     alert("Logged out successfully!");
  }
  
  // Lock the Advance dropdown items when not logged in
  function lockAdvanceDropdown() {
     // Lock all links inside the Advance dropdown
     advanceItems.forEach(item => {
        item.style.pointerEvents = 'none';  // Disable clicking on items
        item.style.color = '#ccc';  // Change color to indicate they are disabled
     });
  }
  
  // Unlock the Advance dropdown items when logged in
  function unlockAdvanceDropdown() {
     // Unlock all links inside the Advance dropdown
     advanceItems.forEach(item => {
        item.style.pointerEvents = 'auto';  // Enable clicking on items
        item.style.color = '';  // Reset color to default
     });
  }
  
  // Check login status when clicking the "Advance" link
  function checkLogin() {
     if (!isLoggedIn) {
        alert("You need to log in to access advanced features.");
     } else {
        alert('Accessing advanced features...');
        // Here, you can also load the content for the advanced features if needed.
     }
  }
  
  // Initialize the header display
  updateHeader();
  