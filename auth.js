// Handle Signup
function handleSignup() {
  const email = document.getElementById("signupEmail").value;
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;
  const age = document.getElementById("signupAge").value;
  const gender = document.getElementById("signupGender").value;

  if (!email || !password || !username || !age || !gender) {
    alert("Please fill all fields.");
    return;
  }

  const user = { email, username, password, age, gender };

  localStorage.setItem("userData", JSON.stringify(user));
  alert("Signup successful! You can now login.");
  window.location.href = "index.html";
}

// Handle Login
function handleLogin() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const storedUser = JSON.parse(localStorage.getItem("userData"));

  if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
    alert("Invalid credentials. Try again or sign up.");
    return;
  }

  // Save login session
  sessionStorage.setItem("loggedIn", "true");
  sessionStorage.setItem("userData", JSON.stringify(storedUser));

  window.location.href = "dashboard.html";
}
