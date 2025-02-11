// Get all accordion headers
const accordionHeaders = document.querySelectorAll('.accordion-header');

// Add click event listener to each header
accordionHeaders.forEach(header => {
  header.addEventListener('click', function() {
    // Toggle the 'active' class on the parent accordion item
    const item = this.parentElement;
    item.classList.toggle('active');
    
    // Close all other accordion items
    const allItems = document.querySelectorAll('.accordion-item');
    allItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });
  });
});