async function newProductHandler(event) {
  event.preventDefault();

  const make = document
    .querySelector('input[name="product-make"]')
    .value.trim();
  const model = document.querySelector('input[name="product-model"]').value;
  const year = document.querySelector('input[name="product-year"]').value;
  const vehicle_id = document.getElementById("product-vehicle").value;

  const response = await fetch(`/api/products`, {
    method: "POST",
    body: JSON.stringify({
      make: make,
      model: model,
      year: year,
      vehicle_id: vehicle_id,
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
  .querySelector(".new-product-form")
  .addEventListener("submit", newProductHandler);
