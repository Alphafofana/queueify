import React from "react";
import logo from "../../assets/queueify_logo1.svg";
import Button from 'react-bootstrap/Button'
//queueify_logo1.svg

const Welcome = () => {
    return (
        <div className="welcomePage">

<div className="logoWelcome">
    <img src={logo} className="queueify-logo" alt="logo" />
</div>

<div class="headerWelcome">
<h1>Welcome!</h1>
<p>Login</p>
</div>

<div class="button1">
    <Button variant="secondary" size="lg">As host</Button>
</div>

<div class="button2">
<Button variant="secondary" size="lg" >As guest</Button>
</div>

<a href="url">Create new account</a>

</div>
    );
};

export default Welcome;