async function newProductHandler(event) {
  event.preventDefault();

  const product_name = document
    .querySelector('input[name="product-name"]')
    .value.trim();
  const year = document.querySelector('input[name="product-price"]').value;
  const make = document.querySelector('input[name="product-stock"]').value;
  const category_id = document.getElementById("product-category").value;

  const response = await fetch(`/api/products`, {
    method: "POST",
    body: JSON.stringify({
      make,
      model,
      year,
      
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
