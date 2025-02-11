const API_URL = "https://dummyjson.com/products"; // API with images, titles, and descriptions
let items = [];

// Fetch data from API
async function fetchData() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    items = data.products;
    displayItems(items);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Display items
function displayItems(data) {
  const container = document.getElementById("items-container");
  container.innerHTML = "";
  data.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `
                    <img src="${item.thumbnail}" alt="${item.title}">
                    <div class="content">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                `;
    container.appendChild(div);
  });
}

// Search filter function
document.getElementById("search").addEventListener("input", function () {
  const searchText = this.value.toLowerCase();
  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(searchText) ||
      item.description.toLowerCase().includes(searchText)
  );
  displayItems(filteredItems);
});

// Load data on page load
fetchData();
