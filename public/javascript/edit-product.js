async function editProductHandler(event) {
  event.preventDefault();

  const year = document
    .querySelector('input[name="product-year"]')
    .value.trim();
  const make = document
    .querySelector('input[name="product-make"]')
    .value.trim();
  const model = document
    .querySelector('input[name="product-model"]')
    .value.trim();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/products/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      year,
      make,
      model,
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
  .querySelector("#edit-product-form")
  .addEventListener("submit", editProductHandler);
