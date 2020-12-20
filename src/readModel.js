/**
 ********************************************************************************
 * @file readModel getting model data from localStorage if data exists
 * @author
 * @version 2.4
 ********************************************************************************
 */
import QueueifyModel from "./queueifyModel";

/**
 * readModel Object
 *
 * readModel checking if model data exists in the localStorage.
 * If not a new Model is loaded.
 * @constant {Object} readModel
 * @return {Object} - returns a model
 */
const ReadModel = () => {
	const modelString = localStorage.getItem("queueifyModel");
	if (modelString) {
		//Conversion from String to object (deserialization)
		const modelObject = JSON.parse(modelString);
		return new QueueifyModel(
			modelObject.currentSession,
			modelObject.currentSessionName,
			modelObject.currentSessionPin,
			modelObject.currentPlaylistID
		);
	}

	return new QueueifyModel();
};

export default ReadModel;
