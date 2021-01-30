async function editProductHandler(event) {
  event.preventDefault();

  const product_name = document
    .querySelector('input[name="product-name"]')
    .value.trim();
  const price = document
    .querySelector('input[name="product-price"]')
    .value.trim();
  const stock = document
    .querySelector('input[name="product-stock"]')
    .value.trim();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/products/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      product_name,
      price,
      stock,
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
