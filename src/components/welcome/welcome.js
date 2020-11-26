<<<<<<< HEAD
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
=======
const { default: WelcomeGuestView } = require("./welcomeGuestView");
const { default: WelcomeHostView } = require("./welcomeHostView");

function WelcomeGuest({}) {


    return h(WelcomeGuestView, {
           
    });
}

function WelcomeHost({}) {



    return h(WelcomeHostView, {
     
    });
}
>>>>>>> 758fe98633f54e1606185add232e2c6dde0dc7e1
