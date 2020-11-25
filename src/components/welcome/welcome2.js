import WelcomeView from "./welcomeView";
//import WelcomeHostView from "./welcomeHostView";
//import WelcomeGuestView from "./welcomeGuestView";
const fakeAuth = {
	isAuthenticated: false,
	authenticate(callback, type) {
		this.isAuthenticated = true;
		setTimeout(callback, 100); // fake async
	},
	signout(callback) {
		this.isAuthenticated = false;
		setTimeout(callback, 100); // fake async
	},
};
const Welcome = () => {
	return !fakeAuth.isAuthenticated ? (
		<WelcomeView
		//loginhost={fakeAuth.authenticate("host")}
		//loginguest={fakeAuth.authenticate("guest")}
		/>
	) : (
		(fakeAuth.isAuthenticated === "host" && (
			<h1>WelcomeHostView</h1> // <WelcomeHostView />
		)) ||
			(fakeAuth.isAuthenticated === "guest" && (
				<h1>WelcomeGuestView</h1> //<WelcomeGuestView />
			))
	);
};

export default Welcome;
