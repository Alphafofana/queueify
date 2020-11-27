import WelcomeView from "./welcomeView";
import WelcomeHostView from "./welcomeHostView";
import WelcomeGuestView from "./welcomeGuestView";

function Welcome() {
	return !localStorage.getItem("isAuthenticated") ? (
		<WelcomeView
			loginhost={() => {
				localStorage.setItem("isAuthenticated", true);
				localStorage.setItem("userType", "host");
			}}
			loginguest={() => {
				localStorage.setItem("isAuthenticated", true);
				localStorage.setItem("userType", "guest");
			}}
		/>
	) : (
		(localStorage.getItem("userType") === "host" && <WelcomeHostView />) ||
			(localStorage.getItem("userType") === "guest" && (
				<WelcomeGuestView />
			))
	);
}

export default Welcome;
