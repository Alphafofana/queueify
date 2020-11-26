import React from "react";
//import Sidebar from "./sidebar/sidebar";
//import Navbar from "./navbar/navbar";
import {
	//HashRouter,
	Redirect,
	Switch,
	Route,
	BrowserRouter,
} from "react-router-dom";
import Welcome from "./welcome/welcome";
import PrivateRoute from "./router/privateRoute";

const Main = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/">
				<Redirect to="/login" />
			</Route>
			<Route exact path="/login">
				<React.Fragment>
					<Welcome />
				</React.Fragment>
			</Route>
			<PrivateRoute
				path="/privateRoute"
				component={() => <h1>This is a Private Route!</h1>}
			/>
			<Route path="/route" component={() => <h1>This is a route</h1>} />
		</Switch>
	</BrowserRouter>
);

export default Main;
//<Navbar />
//<Sidebar />
