import React from "react";
import { Button, Jumbotron } from "react-bootstrap";

const WelcomeGuestView = (user) => {
	return (
		<div className="welcome">

        <Jumbotron className="welcome-jumbo">
            <h1>Hello, @username!</h1>
                <p>
                     Thank you for using Queueify, if you klick the button below 
                     you can join your Hosts Session.
                 </p>
                <p>
                     <Button variant="outline-success" href="#joinsession">Join a Session</Button>
                </p>
        </Jumbotron>

		</div>
	);
};

export default WelcomeGuestView;