import React from "react";
import "./App.css";
import Login from "./components/login/login";
import SessionHandler from "./components/sessionHandler/sessionHandler";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Search from "./components/search/search";
import Popup from "./components/popup/popup";
import QueueifyModel from "./queueifyModel";
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
					<Route path="/login/popup">
						<Popup />
						</Route>
				</Switch>
				<PrivateRoute>
				<div className="sidebarCol">
						<Sidebar/>
					<div className="pageCol">
							<Navbar/>
						<Switch>
							<PrivateRoute path="/search">
									<Search/>
							</PrivateRoute>
							<PrivateRoute path="/session">
									<SessionHandler/>
							</PrivateRoute>
							<PrivateRoute exact path="/session/:sessionId">
									<currentSession/>
							</PrivateRoute>
						</Switch>
					</div>
				</div>
				</PrivateRoute>
			</AuthProvider>
		</BrowserRouter>









/*
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
					<PrivateRoute exact path="/search">
					<div className="pageContainer">
							<Navbar />
							<Row>
								<Col lg="auto" className="sidebarCol">
									<Sidebar />
								</Col>
								<Col className="pageCol">
									<Search model={model} />
								</Col>
							</Row>
						</div>
					</PrivateRoute>
				</Switch>
			</AuthProvider>
		</BrowserRouter>*/
	);
}

export default App;
