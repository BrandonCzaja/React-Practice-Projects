import React from "react";
import GuestGreeting from "./GuestGreeting.jsx";
import UserGreeting from "./UserGreeting.jsx";

function Greeting(props) {
	const isLoggedIn = props.isLoggedIn;

	if (isLoggedIn) {
		return <UserGreeting />;
	}
	return <GuestGreeting />;
}

export default Greeting;
