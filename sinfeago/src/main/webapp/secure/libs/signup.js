		// Function to show and hide the loader anim
		function showLoader(show) {
			document.getElementById("loader").style.display = (show ? "block" : "none");
		}

		function signup() {
			// Show the loader
			showLoader(true);

			// This will sign up the user
			UserApp.User.save({
				login: document.getElementById("username").value,
				first_name: document.getElementById("name").value,
				email: document.getElementById("email").value,
				password: document.getElementById("password").value
			}, function(error, user) {
				if (error) {
					alert("Error: " + error.message);
				} else {
					alert("Obrigado por registrar-se!");
					
					// Redirect to login page
					window.location.href = "login.html";
				}

				showLoader(false);
			});
			
			return false;
		}