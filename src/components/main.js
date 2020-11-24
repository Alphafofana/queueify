import React from "react";
//import Sidebar from "./sidebar/sidebar";
//import Navbar from "./navbar/navbar";
import WelcomeView from "./welcome/welcomeView";

const Main = () => (
	<React.Fragment>
		<div className="landingpage">
			<div className="application">
				<WelcomeView />
				{/* <Navbar />
				<Sidebar /> */}
			</div>
		</div>
	</React.Fragment>
);

export default Main;
