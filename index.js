document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const message = document.getElementById("message");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Perform simple validation (replace this with actual authentication logic)
        if (username === "user" && password === "password") {
            message.textContent = "Login successful!";
            message.style.color = "#00ff00"
            ;
        } else {
            message.textContent = "Login failed. Please check your credentials!";
            message.style.color = "#ff0000";
        }
    });
});

