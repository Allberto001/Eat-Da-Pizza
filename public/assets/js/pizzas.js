$(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newpizza = {
      name: $("#pizza").val().trim(),
     // sleepy: $("[name=sleepy]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/pizzas_db", {
      type: "POST",
      data: newpizza
    }).then(
      function() {
        console.log("created new pizza");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });