// Function to show the loading animation
function showLoader() {
    document.getElementById('loader').style.display = 'flex';
  }
  
  // Function to hide the loading animation
  function hideLoader() {
    document.getElementById('loader').style.display = 'none';
  }
  
  // Function to validate Student ID
  function validateStudentID() {
    const studentID = document.getElementById('studentID').value.trim();
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = ''; // Clear any previous message
    showLoader(); // Show the loader
  
    // Simulate loading delay
    setTimeout(() => {
      const isValid = studentID.startsWith("M230") && studentID.length === 8;
  
      hideLoader(); // Hide the loader after delay
  
      if (isValid) {
        window.location.href = "dashboard.html";
      } else {
        errorMessage.textContent = "Who goes you! Invalid Student ID. Please enter a valid ID starting with 'M230'.";
      }
    }, 2000); // 2 seconds delay (adjust as needed)
  }
  
  // Event listener for form submission
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    validateStudentID();    // Call validation with animation
  });
  