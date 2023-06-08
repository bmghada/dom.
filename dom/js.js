
// Get all the elements with the respective class names
const quantityInputs = document.querySelectorAll('.btn-cont p');
const unitPriceCells = document.querySelectorAll('.unitPrice');
const priceCells = document.querySelectorAll('.price');
const totalCell = document.querySelector('#total'); // Update the selector to target the total cell

// Add event listeners to the plus and minus buttons
const plusButtons = document.querySelectorAll('.plus');
const minusButtons = document.querySelectorAll('.minus');
plusButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    updateQuantity(index, 1);
  });
});
minusButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    updateQuantity(index, -1);
  });
});

// Function to update the quantity and calculate the price
function updateQuantity(index, increment) {
  const quantity = parseInt(quantityInputs[index].textContent);
  const newQuantity = quantity + increment;
  if (newQuantity >= 0) {
    quantityInputs[index].textContent = newQuantity;
    const unitPrice = parseInt(unitPriceCells[index].textContent);
    const price = newQuantity * unitPrice;
    priceCells[index].textContent = price;
    calculateTotal();
  }
}

// Function to calculate the total price
function calculateTotal() {
  let total = 0;
  priceCells.forEach((cell) => {
    total += parseInt(cell.textContent);
  });
  totalCell.textContent = total;
}

// Add event listeners to the like buttons
const likeButtons = document.querySelectorAll('.like');
likeButtons.forEach((button) => {
  button.addEventListener('click', function () {
    this.classList.toggle('liked');
  });
});

// Calculate and display the initial total
calculateTotal();

