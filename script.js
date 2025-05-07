// Button click event handler to change description text
document.getElementById("changeTextBtn").addEventListener("click", () => {
    const description = document.getElementById("app-description");
    description.textContent = "Your trusted partner for campus life success!";
    description.style.color = "#16a34a";
    description.style.fontWeight = "bold";
  });
  
  // Toggle visibility of extra-info section
  document.getElementById("toggleElementBtn").addEventListener("click", () => {
    const extra = document.getElementById("extra-info");
    extra.style.display = extra.style.display === "none" ? "block" : "none";
  });
  
  // Hover effect on button
  document.getElementById("hoverButton").addEventListener("mouseenter", () => {
    console.log("Button hovered!");
  });
  
  // Double-click event for a secret action
  document.getElementById("changeTextBtn").addEventListener("dblclick", () => {
    alert("Double-clicked! Here's a secret action! 🤫");
  });
  
  // Long press detection
  let pressTimer;
  document.getElementById("changeTextBtn").addEventListener("mousedown", () => {
    pressTimer = setTimeout(() => {
      alert("Long press detected! 🤫");
    }, 1000); // 1000ms = 1 second for long press
  });
  document.getElementById("changeTextBtn").addEventListener("mouseup", () => {
    clearTimeout(pressTimer); // Clear timer if mouse is released early
  });
  
  // Image gallery lightbox-like effect
  const images = document.querySelectorAll('.gallery-image');
  images.forEach(image => {
    image.addEventListener('click', () => {
      alert(`You clicked on image: ${image.alt}`);
    });
  });
  
  // Form validation on submit
  document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let valid = true;
  
    // Email format validation
    const emailError = document.getElementById("email-error");
    if (!email.includes('@')) {
      emailError.textContent = "Invalid email format!";
      valid = false;
    } else {
      emailError.textContent = "";
    }
  
    // Password validation
    const passwordError = document.getElementById("password-error");
    if (password.length < 8) {
      passwordError.textContent = "Password must be at least 8 characters!";
      valid = false;
    } else {
      passwordError.textContent = "";
    }
  
    // If valid, proceed with registration
    if (valid) {
      alert("Registration successful!");
    }
  });
  
  // Real-time feedback for password field
  document.getElementById("password").addEventListener("input", () => {
    const passwordField = document.getElementById("password");
    const passwordLength = passwordField.value.length;
    if (passwordLength < 8) {
      passwordField.style.borderColor = "red";
    } else {
      passwordField.style.borderColor = "#14b8a6";
    }
  });
  