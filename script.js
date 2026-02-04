let loginBtn = document.getElementById("loginBtn");
let registerBtn = document.getElementById("registerBtn");
let title = document.getElementById("title");
let nameField = document.getElementById("name");

registerBtn.onclick = function () {
    title.innerText = "Register";
    nameField.style.display = "block";
};

loginBtn.onclick = function () {
    title.innerText = "Login";
    nameField.style.display = "none";
};
