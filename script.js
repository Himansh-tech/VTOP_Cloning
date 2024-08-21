document.getElementById('loginForm').addEventListener('submit', function (event) {

    event.preventDefault();
});

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var eyeIcon = document.getElementById("eyeIcon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.setAttribute("name", "eye-outline");
    } else {
        passwordInput.type = "password";
        eyeIcon.setAttribute("name", "eye-off-outline");
    }
}