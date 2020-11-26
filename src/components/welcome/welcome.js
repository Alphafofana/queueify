const { default: WelcomeGuestView } = require("./welcomeGuestView");
const { default: WelcomeHostView } = require("./welcomeHostView");

function WelcomeGuest({}) {


    return h(WelcomeGuestView, {
           
    });
}

function WelcomeHost({}) {



    return h(WelcomeHostView, {
     
    });
}