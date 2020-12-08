import React from "react";
import "./App.css";
import Login from "./components/login/login";
import SessionHandler from "./components/sessionHandler/sessionHandler";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Popup from "./components/popup/popup";
import Search from "./components/search/search";
//import PrivateRoute from "./components/router/privateRouteComponent";
import PrivateRoute from "./components/router/privateRouteChildren";
import { AuthProvider } from "./contexts/AuthContext";
import { Row, Col } from "react-bootstrap";
import {
	//HashRouter,
	Redirect,
	Switch,
	Route,
	BrowserRouter,
} from "react-router-dom";
import CurrentSession from "./components/currentSession/currentSession";
import CurrentSessionHostView from "./components/currentSession/currentSessionHostView";

function App() {
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
					<PrivateRoute path="/currentSession">
						<div className="pageContainer">
							<Navbar />
							<Row>
								<Col lg="auto" className="sidebarCol">
									<Sidebar />
								</Col>
								<Col className="pageCol">
									<CurrentSession />
								</Col>
							</Row>
						</div>
					</PrivateRoute>
					<PrivateRoute path="/currentSessionHost">
						<div className="pageContainer">
							<Navbar />
							<Row>
								<Col lg="auto" className="sidebarCol">
									<Sidebar />
								</Col>
								<Col className="pageCol">
									<CurrentSession />
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
