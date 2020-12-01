import "./App.css";
import React from "react";
import { Row, Col } from "react-bootstrap";
import Login from "./components/login/login";
import SessionHandler from "./components/sessionHandler/sessionHandler";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Search from "./components/search/search";
//import PrivateRoute from "./components/router/privateRouteComponent";
import PrivateRoute from "./components/router/privateRouteChildren";
import { AuthProvider } from "./contexts/AuthContext";
import {
	//HashRouter,
	Redirect,
	Switch,
	Route,
	BrowserRouter,
} from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Switch>
					<Route exact path="/">
						<Redirect to="/login" />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/search">
					<div className="pageContainer">
							<Navbar />
							<Row>
								<Col lg="auto" className="sidebarCol">
									<Sidebar />
								</Col>
								<Col className="pageCol">
									<Search />
								</Col>
							</Row>
						</div>
						</Route>
					<PrivateRoute path="/session">
						<div className="pageContainer">
							<Navbar />
							<Row>
								<Col lg="auto" className="sidebarCol">
									<Sidebar />
								</Col>
								<Col className="pageCol">
									<SessionHandler />
								</Col>
							</Row>
						</div>
					</PrivateRoute>
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
}

export default App;
