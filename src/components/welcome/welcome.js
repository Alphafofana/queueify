import WelcomeView from "./welcomeView";
import WelcomeHostView from "./welcomeHostView";
import WelcomeGuestView from "./welcomeGuestView";
import { signInWithGoogle } from '../../services/firebase.js';


function Welcome() {



	return !localStorage.getItem("isAuthenticated") ? (
		<WelcomeView
			loginhost={signInWithGoogle}
			loginguest={signInWithGoogle}
		/>
	) : (
		(localStorage.getItem("userType") === "host" && <WelcomeHostView />) ||
			(localStorage.getItem("userType") === "guest" && (
				<WelcomeGuestView />
			))
	);
}

export default Welcome;
