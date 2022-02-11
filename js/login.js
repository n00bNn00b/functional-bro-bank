document.getElementById("login-btn").addEventListener("click", function (e) {
  // email field event

  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;
  //  user pass event

  const passField = document.getElementById("user-password");
  const userPass = passField.value;
  if (userEmail == "admin@demo.com" && userPass == "demopass") {
    window.location.href = "banking/";
  } else {
    alert("Wrong Email or Password!");
  }
});
