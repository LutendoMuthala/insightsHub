function signUp() {
  const username = document.getElementById("newUsername").value;
  const password = document.getElementById("newPassword").value;

  if (!username || !password) {
    alert("Please fill in both fields.");
    return;
  }

  // Simulate saving to storage
  localStorage.setItem("user_" + username, password);
  alert("Account created! You can now log in.");
  window.location.href = "index.html";
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const storedPassword = localStorage.getItem("user_" + username);

  if (password === storedPassword) {
    localStorage.setItem("user", username);
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials. Please try again or sign up.");
  }
}
