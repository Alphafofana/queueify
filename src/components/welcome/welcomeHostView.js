import React from "react";
import { Button, Jumbotron } from "react-bootstrap";

const WelcomeHostView = () => {
	return (
		<div className="welcome">

        <Jumbotron className="welcome-jumbo">
            <h1>Hello, @username!</h1>
                <p>
                     Thank you for using Queueify, if you klick the button below 
                     you can create a new Session.
                 </p>
                <p>
                     <Button variant="outline-success" href="#createsession">Create a Session</Button>
                </p>
        </Jumbotron>

		</div>
	);
};

export default WelcomeHostView;