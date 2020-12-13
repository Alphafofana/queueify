import React, { useState, useEffect } from "react";
import CurrentSessionGuestView from "./currentSessionGuestView";
import CurrentSessionHostView from "./currentSessionHostView";
import { useAuth } from "../../contexts/AuthContext";
import usePromise from "../usePromise";
import PromiseNoData from "../promiseNoData";

function CurrentSession({ model }) {
	const { currentUser } = useAuth();
	const [playlist, setPlaylist] = useState();
	//useEffect(() => setPlaylist(model.getCurrentPlaylist()), [model]);
	useEffect(() => {
		setPlaylist(model.getCurrentPlaylist());
		const obs = () => setPlaylist(model.getCurrentPlaylist());
		return model.addObserver(obs);
	}, [model]);
	const [data, error] = usePromise(playlist);

	return (
		<>
			{(currentUser.uid.includes("spotify") &&
				(PromiseNoData(playlist, data, error) || (

					<CurrentSessionHostView
						user={currentUser}
						error={error}
						playlist={data}
						sessionID={model.getModelProperty("currentSession")}
						sessionName={model.getModelProperty(
							"currentSessionName"
						)}
					/>
				))) ||
				((currentUser.providerData[0].providerId === "google.com" ||
					currentUser.providerData[0].providerId ===
						"facebook.com") &&
					(PromiseNoData(playlist, data, error) || (
						<CurrentSessionGuestView
							user={currentUser.providerData[0]}
							error={error}
							playlist={data}
							sessionID={model.getModelProperty("currentSession")}
							sessionName={model.getModelProperty(
								"currentSessionName"
							)}
						/>
					)))}
		</>
	);
}

export default CurrentSession;
