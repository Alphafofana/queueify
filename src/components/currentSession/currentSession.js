import React, { useState, useEffect } from "react";
import CurrentSessionGuestView from "./currentSessionGuestView";
import CurrentSessionHostView from "./currentSessionHostView";
import { useAuth } from "../../contexts/AuthContext";
import dataSource from "../../dataSource";
import usePromise from "../usePromise"
import PromiseNoData from "../promiseNoData";


function CurrentSession({currPlaylist_id}) {
	const { logout, currentUser } = useAuth();
	const [error, setError] = useState("");
	//const [loading, setLoading] = useState(false); //TODO: DO we need a loading state?
	const[promise, setPromise] = useState();
	useEffect(()=> setPromise(dataSource.getPlaylist("37i9dQZEVXbMDoHDwVN2tF")), []);
	const [data, errorp] = usePromise(promise);
	console.log(data);

	async function handleLogout() {
		setError("");

		try {
			await logout();
		} catch {
			console.error("Failed to log out!");
			setError("Failed to log out");
		}
	}

	return (<>
		{currentUser &&
		((currentUser.providerData[0].providerId === "spotify.com" && (
			<CurrentSessionHostView
				user={currentUser.providerData[0]}
				logout={handleLogout}
				error={error}
			/>
		)) ||
			((currentUser.providerData[0].providerId === "google.com" ||
				currentUser.providerData[0].providerId === "facebook.com") && PromiseNoData(promise, data, error)||(
				<CurrentSessionGuestView
					user={currentUser.providerData[0]}
					logout={handleLogout}
					error={error}
					currSession = {data}
					sessionName={"*PlaylistName*"} //TODO: Complete this!
					sessionID={"*12345*"} //TODO: Complete this!
				/>
			)))}</>
	);
}

export default CurrentSession;
