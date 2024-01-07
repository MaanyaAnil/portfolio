document.getElementById("feedbackForm").addEventListener("submit", function(event) 
            {
            event.preventDefault();
            
            // Retrieve form data
            var formData = {
             name: document.getElementById("name").value,
             email: document.getElementById("email").value,
             feedback: document.getElementById("feedback").value,
             rating: document.getElementById("rating").value
            };
            // Here, you can send the form data to your server using AJAX or perform other actions.
            console.log(formData);
            
            // Optionally, you can display a thank-you message or redirect the user.
            function submitClick () { 
                if (feedback ()) { 
                    alert ("Thank you for your time!")
                }
            }
            
            });