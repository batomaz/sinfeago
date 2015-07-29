		var currentUser = null; // This will contain the logged in user

		// Check if there is a session cookie
		var token = Cookies.get("ua_session_token");
		if (token) {
			// Yes, there is
			UserApp.setToken(token);

			// Get the logged in user
			getCurrentUser(function(user) {
				if (user) {
					currentUser = user;
					onUserLoaded();
				} else {
					window.location.href = "login.html";
				}
			});
		} else {
			// No, redirect the user to the login.html page
			window.location.href = "login.html";
		}

		// When the user has loaded
		function onUserLoaded() {
			// Print the name
			document.getElementById("name").innerHTML = currentUser.first_name;

      		// Load articles from back-end
      		getArticles();
		}

		// Get the logged in user
		function getCurrentUser(callback) {
			UserApp.User.get({ user_id: "self" }, function(error, user) {
				if (error) {
					callback && callback(null);
				} else {
					callback && callback(user[0]);
				}
			});
		}

	    // Get this user's articles from the back-end
	    function getArticles() {
			$.get("articles", function(data) {
				if (data) {
					$("#articles").html("");

					for (var i = 0; i < data.length; ++i) {
						$("#articles").append($("<li></li>").text(data[i].title));
					}
				}
			}, "json");
	    }

		// Logout function
		function logout() {
			Cookies.expire("ua_session_token");
			UserApp.User.logout(function() {
				window.location.href = "login.html";
			});
		}
