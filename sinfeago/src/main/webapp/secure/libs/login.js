		// Function to show and hide the loader anim
		function showLoader(show) {
			document.getElementById("loader").style.display = (show ? "block" : "none");
		}

		// Login the user
		function login() {
			// Show the loader
			showLoader(true);

			// This will authenticate the user
			UserApp.User.login({
				login: document.getElementById("username").value,
				password: document.getElementById("password").value
			}, function(error, result) {
				if (error) {
					// Wrong password maybe?
					alert("Error: " + error.message);
					showLoader(false);
				} else {
					onLoginSuccessful();
				}
			});

			return false;
		}

		// When the user has been logged in successfully
		function onLoginSuccessful() {
			// Now, save the token in a cookie
			Cookies.set("ua_session_token", UserApp.global.token);
			
			// Redirect the user to the index page
			window.location.href = "index.html";
			showLoader(false);
		}