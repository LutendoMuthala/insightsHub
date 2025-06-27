function signUp() {
  const username = document.getElementById("newUsername").value.trim();
  const email = document.getElementById("newEmail").value.trim();
  const password = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!username || !email || !password || !confirmPassword) {
    alert("Please fill in all fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // Save user info as JSON string with email as key
  const userData = {
    username,
    email,
    password
  };

  localStorage.setItem("user_" + email, JSON.stringify(userData));

  alert("Account created! You can now log in.");
  window.location.href = "index.html"; // redirect to login page
}


function login() {
  const email = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  const storedUserJSON = localStorage.getItem("user_" + email);

  if (!storedUserJSON) {
    alert("Invalid credentials. Please try again or sign up.");
    return;
  }

  const storedUser = JSON.parse(storedUserJSON);

  if (storedUser.password === password) {
    localStorage.setItem("loggedInUser", email); // save logged in user session
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials. Please try again or sign up.");
  }
}
