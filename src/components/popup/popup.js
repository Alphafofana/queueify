import app from "../../services/firebase";
import PopupView from "./popupView";

function Popup() {
	function getURLParameter(name) {
		return (
			decodeURIComponent(
				(new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(
					window.location.search
				) || [null, ""])[1].replace(/\+/g, "%20")
			) || null
		);
	}

	/**
	 * Returns the ID of the Firebase project.
	 */
	function getFirebaseProjectId() {
		return app.options.authDomain.split(".")[0];
	}

	/**
	 * This callback is called by the JSONP callback of the 'token' Firebase Function with the Firebase auth token.
	 */
	function tokenReceived(data) {
		if (data.token) {
			app.auth()
				.signInWithCustomToken(data.token)
				.then(function () {
					window.close();
				});
		} else {
			console.error(data);
			document.body.innerText =
				"Error in the token Function: " + data.error;
		}
	}

	/* var code = getURLParameter("code");
	var state = getURLParameter("state");
	var error = getURLParameter("error");
	if (error) {
		document.body.innerText =
			"Error back from the Spotify auth page: " + error;
	} else if (!code) {
		window.location.href =
			"https://us-central1-" +
			getFirebaseProjectId() +
			".cloudfunctions.net/redirect";
	} else {
		// Use JSONP to load the 'token' Firebase Function to exchange the auth code against a Firebase custom token.
		const script = document.createElement("script");
		script.type = "text/javascript";
		// This is the URL to the HTTP triggered 'token' Firebase Function.
		// See https://firebase.google.com/docs/functions.
		var tokenFunctionURL =
			"https://us-central1-" +
			getFirebaseProjectId() +
			".cloudfunctions.net/token";
		script.src =
			tokenFunctionURL +
			"?code=" +
			encodeURIComponent(code) +
			"&state=" +
			encodeURIComponent(state) +
			"&callback=" +
			tokenReceived.name;
		document.head.appendChild(script);
	} */
	return <PopupView />;
}

export default Popup;
