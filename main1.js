function login() {
    const email = document.getElementById("email").value;
    const errorDiv = document.getElementById("errorMsg");
    const pass = document.getElementById("password").value;

    if (email === "gertiandiariylli@gmail.com" && pass === "gertiandiariylli") {
        window.location.href = "index.html";
    } else {
      errorDiv.textContent = "Access denied for this email.";
    }
  }
