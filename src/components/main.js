import React from "react";
//import Sidebar from "./sidebar/sidebar";
//import Navbar from "./navbar/navbar";
import {
	//HashRouter,
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
				<React.Fragment>
					<div className="landingpage">
						<div className="application">
							<Welcome />
							{/* <Navbar />
				<Sidebar /> */}
						</div>
					</div>
				</React.Fragment>
			</Route>
			<PrivateRoute path="/test1" component={() => <h1>test1</h1>} />
			<Route path="/test2" component={() => <h1>test2</h1>} />
		</Switch>
	</BrowserRouter>
);

export default Main;
