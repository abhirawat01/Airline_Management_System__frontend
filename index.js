
  // Function to increment the counter
  function increment() {
    var counterElement = document.getElementById('counter');
    var currentValue = parseInt(counterElement.textContent);
    counterElement.textContent = currentValue + 1;
  }

  // Function to decrement the counter
  function decrement() {
    var counterElement = document.getElementById('counter');
    var currentValue = parseInt(counterElement.textContent);
    // Ensure counter doesn't go below 0
    if (currentValue > 0) {
      counterElement.textContent = currentValue - 1;
    }
  }