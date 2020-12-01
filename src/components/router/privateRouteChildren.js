import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function PrivateRoute(props) {
	const { currentUser } = useAuth();
	return (
		<Fragment>
			{currentUser ? props.children : <Redirect to="/login" />}
		</Fragment>
	);
}
export default PrivateRoute;
