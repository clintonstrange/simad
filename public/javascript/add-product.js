async function newProductHandler(event) {
  event.preventDefault();

  const make = document
    .querySelector('input[name="product-name"]')
    .value.trim();
  const model = document.querySelector('input[name="product-price"]').value;
  const year = document.querySelector('input[name="product-stock"]').value;
  const category_id = document.getElementById("product-category").value;

  const response = await fetch(`/api/make`, {
    method: "POST",
    body: JSON.stringify({
      make:make,
      model:model,
      year:year,
      category_id:category_id
      
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
