import React from "react";
import Sidebar from "./sidebar/sidebar";
import Navbar from "./navbar/navbar";

const Main = () => (
	<React.Fragment>
		<div className="landingpage">
			<div className="application">
				<Navbar />
				<Sidebar />
			</div>
		</div>
	</React.Fragment>
);

export default Main;
