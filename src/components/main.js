import React from "react";
import Welcome from "./welcome/welcome";
import PrivateRoute from "./router/privateRoute";
import { AuthProvider } from "../contexts/AuthContext";
import {
	//HashRouter,
	Redirect,
	Switch,
	Route,
	BrowserRouter,
} from "react-router-dom";

const Main = () => (
	<BrowserRouter>
		<AuthProvider>
			<Switch>
				<Route exact path="/">
					<Redirect to="/login" />
				</Route>
				<Route path="/login">
					<Welcome />
				</Route>
				<PrivateRoute
					path="/privateRoute"
					component={() => <h1>This is a Private Route!</h1>}
				/>
				<Route
					path="/route"
					component={() => <h1>This is a route</h1>}
				/>
			</Switch>
		</AuthProvider>
	</BrowserRouter>
);

export default Main;
