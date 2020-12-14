import React from "react";
import "./App.css";
import Login from "./components/login/login";
import SessionHandler from "./components/sessionHandler/sessionHandler";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Search from "./components/search/search";
import Popup from "./components/popup/popup";
import ReadModel from "./readModel";
//import PrivateRoute from "./components/router/privateRouteComponent";
import PrivateRoute from "./components/router/privateRouteChildren";
import { AuthProvider } from "./contexts/AuthContext";
import CurrentSession from "./components/currentSession/currentSession";
import { Row, Col } from "react-bootstrap";

import {
	//HashRouter,
	Redirect,
	Switch,
	Route,
	BrowserRouter,
} from "react-router-dom";

function App() {
	const model = ReadModel();
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
					<Route exact path="/login/popup">
						<Popup />
					</Route>
				</Switch>
				<PrivateRoute>
					<div className="sidebarCol">
						<Sidebar className="sidebar" model={model} />
						<div className="pageCol">
							<Navbar />
							<Switch>
								<PrivateRoute exact path="/search">
									<Search model={model} />
								</PrivateRoute>
								<PrivateRoute exact path="/session">
									<SessionHandler model={model} />
								</PrivateRoute>
								<PrivateRoute exact path="/session/:sessionId">
									<CurrentSession model={model} />
								</PrivateRoute>
							</Switch>
						</div>
					</div>
				</PrivateRoute>
			</AuthProvider>
		</BrowserRouter>

		/* 		<BrowserRouter>
			<AuthProvider>
				<Switch>
					<Route exact path="/">
						<Redirect to="/login" />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/login/popup">
						<Popup />
					</Route>
					<PrivateRoute exact path="/session">
						<div className="pageContainer">
							<Navbar model={model} />
							<Row>
								<Col lg="auto" className="sidebarCol">
									<Sidebar model={model} />
								</Col>
								<Col className="pageCol">
									<SessionHandler model={model} />
								</Col>
							</Row>
						</div>
					</PrivateRoute>
					<PrivateRoute exact path="/session/:sessionId">
						<div className="pageContainer">
							<Navbar model={model} />
							<Row>
								<Col lg="auto" className="sidebarCol">
									<Sidebar model={model} />
								</Col>
								<Col className="pageCol">
									<CurrentSession model={model} />
								</Col>
							</Row>
						</div>
					</PrivateRoute>
					<PrivateRoute exact path="/search">
						<div className="pageContainer">
							<Navbar />
							<Row>
								<Col lg="auto" className="sidebarCol">
									<Sidebar model={model} />
								</Col>
								<Col className="pageCol">
									<Search model={model} />
								</Col>
							</Row>
						</div>
					</PrivateRoute>
				</Switch>
			</AuthProvider>
		</BrowserRouter> */
	);
}

export default App;
