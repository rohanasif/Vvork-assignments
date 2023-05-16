const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const newEmail = document.getElementById("new-email").value;
  const old = document.getElementById("old").value;
  const newPassword = document.getElementById("new-password").value;
  const repeatNew = document.getElementById("repeat-new").value;

  const allData = JSON.parse(localStorage.getItem("data"));

  if (allData) {
    for (user of allData) {
      if (user.email === newEmail && user.password === old) {
        if (newPassword === repeatNew) {
          user.password = newPassword;
          localStorage.setItem("data", JSON.stringify(allData));
          alert("Password updated");
          break;
        } else {
          alert("Password wekho!");
          break;
        }
      } else {
        alert("Email not found!");
      }
    }
  } else {
    alert("Signup first!");
  }
});
