async function newCategoryHandler(event) {
  event.preventDefault();

  const category_name = document.querySelector('input[name="category-name"]')
    .value;

  const response = await fetch(`/api/categories`, {
    method: "POST",
    body: JSON.stringify({
      category_name,
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
  .querySelector(".new-category-form")
  .addEventListener("submit", newCategoryHandler);
