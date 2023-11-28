function openPaymentForm() {
  // Show the payment form
  document.getElementById('payment-form').style.display = 'block';

  // Calculate total price (replace this with your own logic)
  const quantity = parseFloat(document.getElementById('quantity').value);
  const unitPrice = 10.99; // Replace with your item's unit price
  const totalPrice = quantity * unitPrice;
  document.getElementById('total-price').value = totalPrice.toFixed(2);
}
