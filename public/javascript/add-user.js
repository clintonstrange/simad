async function addUserFormHandler(event) {
  event.preventDefault();

  const first_name = document.querySelector("#first-adduser").value.trim();
  const last_name = document.querySelector("#last-adduser").value.trim();
  const role = document.querySelector("#roles").value;
  const email = document.querySelector("#email-adduser").value.trim();
  const password = document.querySelector("#password-adduser").value.trim();

  if (first_name && last_name && role && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        first_name,
        last_name,
        role,
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
  .querySelector("#adduser-form")
  .addEventListener("submit", addUserFormHandler);
