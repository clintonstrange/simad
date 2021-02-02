async function editCategoryHandler(event) {
  event.preventDefault();

  const category_name = document
    .querySelector('input[name="category-name"]')
    .value.trim();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/categories/${id}`, {
    method: "PUT",
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
  .querySelector("#edit-category-form")
  .addEventListener("submit", editCategoryHandler);
