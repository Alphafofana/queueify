import React from "react";
import "./App.css";
import Login from "./components/login/login";
import SessionHandler from "./components/sessionHandler/sessionHandler";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Popup from "./components/popup/popup";
import Search from "./components/search/search";
import currentSession from "./components/currentSession/currentSession";
import PrivateRoute from "./components/router/privateRouteChildren";
import { AuthProvider } from "./contexts/AuthContext";
import {Redirect, Switch, Route, BrowserRouter} from "react-router-dom";


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
					<Route path="/login/popup">
						<Popup />
					</Route>
          			<PrivateRoute path="/session">
						  <div className="sidebarCol" >
						  <Sidebar/>
							  <div className="pageCol">
							<Navbar />
							<SessionHandler />
							</div>
						</div>  
					</PrivateRoute>

					<PrivateRoute path="/search">
						  <div className="sidebarCol">
						  <Sidebar/>
							  <div className="pageCol">
							<Navbar />
							<Search/>
							</div>
						</div>  
					</PrivateRoute>

					<PrivateRoute exact path="/session/:sessionId">
						  <div className="sidebarCol">
						  <Sidebar/>
							  <div className="pageCol">
							<Navbar />
							<Search/>
							</div>
						</div>  
					</PrivateRoute>
				</Switch>
			</AuthProvider>
		</BrowserRouter>*/
	);
}

export default App;
