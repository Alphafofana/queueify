import { Route, Redirect } from "react-router-dom";

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

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			fakeAuth.isAuthenticated === true ? (
				<Component {...props} />
			) : (
				<Redirect to="/" />
			)
		}
	/>
);

export default PrivateRoute;
