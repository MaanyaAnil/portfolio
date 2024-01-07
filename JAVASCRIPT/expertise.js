    // Get all the buttons
    var cards = document.querySelectorAll(".card");

    // Loop through the cards and add click event listener
    for (var i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", function() {
        // Get the product name and price from the card
        var name = this.querySelector("h3").innerText;
        var price = this.querySelector("p").innerText;

        // Display an alert message with the product details
        alert("You have added " + name + " (" + price + ") to your cart.");

        function navigateToOtherFolder() {
          // Use relative path to navigate to add_to_cart.html in the add_to_cart folder
          location.href = '/add_to_cart/add_to_cart.html';
        }
      });
    }