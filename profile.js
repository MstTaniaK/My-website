window.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(sessionStorage.getItem("userData"));

  if (!user) {
    alert("No user logged in. Redirecting...");
    window.location.href = "index.html";
    return;
  }

  document.getElementById("profileUsername").textContent = user.username;
  document.getElementById("profileEmail").textContent = user.email;
  document.getElementById("profileGender").textContent = user.gender;
  document.getElementById("profileAge").textContent = user.age;
});
