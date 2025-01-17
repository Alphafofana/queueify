import React, { useState, useEffect, useRef } from "react";
import CurrentSessionGuestView from "./currentSessionGuestView";
import CurrentSessionHostView from "./currentSessionHostView";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import usePromise from "../usePromise";
import PromiseNoData from "../promiseNoData";

function CurrentSession({ model }) {
	const { currentUser } = useAuth();
	const [playlist, setPlaylist] = useState();
	const [showPin, setShowPin] = useState(false);
	const target = useRef(null);
	const [data, error] = usePromise(playlist);
	const history = useHistory();
	useEffect(() => {
		if (model.getModelProperty("currentSession")) {
			setPlaylist(model.getCurrentPlaylist());
			//model.firebaseSubscriber();
			const obs = () => setPlaylist(model.getCurrentPlaylist());
			return model.addObserver(obs);
		} else {
			history.push("/session");
		}
	}, [model, history]);

	return (
		<>
			{(currentUser.uid.includes("spotify") &&
				(PromiseNoData(playlist, data, error) || (
					<CurrentSessionHostView
						user={currentUser}
						error={error}
						pin={model.getModelProperty("currentSessionPin")}
						showPin={showPin}
						setShowPin={() => setShowPin(!showPin)}
						target={target}
						playlist={data}
						vote={(songID) => model.upVote(songID)}
						deleteSong={(songID) => model.deleteSong(songID)}
						sessionID={model.getModelProperty("currentSession")}
						sessionName={model.getModelProperty(
							"currentSessionName"
						)}
						playlistId={model.getModelProperty("currentPlaylistID")}
					/>
				))) ||
				((currentUser.providerData[0].providerId === "google.com" ||
					currentUser.providerData[0].providerId ===
						"facebook.com") &&
					(PromiseNoData(playlist, data, error) || (
						<CurrentSessionGuestView
							user={currentUser}
							error={error}
							playlist={data}
							vote={(songID) => model.upVote(songID)}
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
