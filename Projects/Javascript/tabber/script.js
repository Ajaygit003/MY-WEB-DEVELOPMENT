const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

// Add event listeners to each tab button
tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    const tabId = this.getAttribute("data-tab");

    // Hide all tab contents
    tabContents.forEach((content) => {
      content.classList.remove("active-content");
    });

    // Remove active class from all tabs
    tabs.forEach((t) => {
      t.classList.remove("active");
    });

    // Show the clicked tab content and add the active class to the clicked tab
    document.getElementById(tabId).classList.add("active-content");
    this.classList.add("active");
  });
});
