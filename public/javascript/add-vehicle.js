async function newVehicleHandler(event) {
  event.preventDefault();

  const vehicle_name = document.querySelector('input[name="vehicle-name"]')
    .value;

  const response = await fetch(`/api/vehicles`, {
    method: "POST",
    body: JSON.stringify({
      vehicle_name: vehicle_name,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-vehicle-form")
  .addEventListener("submit", newVehicleHandler);
