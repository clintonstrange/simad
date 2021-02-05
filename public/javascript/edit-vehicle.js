async function editVehicleHandler(event) {
  event.preventDefault();

  const vehicle_name = document
    .querySelector('input[name="vehicle-name"]')
    .value.trim();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/vehicles/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      vehicle_name,
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
  .querySelector("#edit-vehicle-form")
  .addEventListener("submit", editVehicleHandler);
