async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#user").value.trim();
  const password = document.querySelector("#pass").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector("#form_login")
  .addEventListener("submit", loginFormHandler);
