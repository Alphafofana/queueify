import React, { useContext, useState, useEffect } from "react";
import firebase from "firebase/app";
import { auth } from "../services/firebase";

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);
	const [setUserID] = useState();

	function login(provider) {
		const providers = {
			google: firebase.auth.GoogleAuthProvider,
			facebook: firebase.auth.FacebookAuthProvider,
		};
		//const provider = "google";
		return auth.signInWithPopup(new providers[provider]());
		//const provider = new firebase.auth.GoogleAuthProvider();
		//return auth.signInWithPopup(provider);
	}

	function logout() {
		return auth.signOut();
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		login,
		logout,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
