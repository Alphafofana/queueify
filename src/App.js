import "./App.css";
import React from "react";
import { Row, Col } from "react-bootstrap";
import Login from "./components/login/login";
import SessionHandler from "./components/sessionHandler/sessionHandler";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Search from "./components/search/search";
import Popup from "./components/popup/popup";
import QueueifyModel from "./queueifyModel";

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
import CurrentSession from "./components/currentSession/currentSession";

function App() {
	let model = new QueueifyModel();
	return (
		<BrowserRouter>
			<AuthProvider>
				<Switch>
					<Route exact path="/">
						<Redirect to="/login" />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
					<PrivateRoute path="/search">
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
					</PrivateRoute>
					<Route path="/login/popup">
						<Popup />
					</Route>
					<PrivateRoute exact path="/session">
						<div className="pageContainer">
							<Navbar />
							<Row>
								<Col lg="auto" className="sidebarCol">
									<Sidebar />
								</Col>
								<Col className="pageCol">
									<SessionHandler model={model} />
								</Col>
							</Row>
						</div>
					</PrivateRoute>
					<PrivateRoute exact path="/session/:sessionId">
						<div className="pageContainer">
							<Navbar />
							<Row>
								<Col lg="auto" className="sidebarCol">
									<Sidebar />
								</Col>
								<Col className="pageCol">
									<CurrentSession model={model} />
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
