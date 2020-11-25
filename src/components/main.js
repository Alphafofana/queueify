import React from "react";
import Sidebar from "./sidebar/sidebar";
import Navbar from "./navbar/navbar";
import Welcome from "./welcome/welcome";

const Main = () => (
	<React.Fragment>
		<div className="landingpage">
			<div className="application">
			<Welcome/>
			</div>
		</div>
	</React.Fragment>
);

export default Main;
//<Navbar />
//<Sidebar />
