import React from "react";
import UserGreeting from "./UserGreeting.jsx";
import GuestGreeting from "./GuestGreeting.jsx";
import Greeting from "./Greeting.jsx";
import LoginButton from "./LoginButton.jsx";
import LogoutButton from "./LogoutButton.jsx";

/////////////////////////////////////////////
// User Greeting
// function UserGreeting(props) {
// 	return <h1>Welcome back!</h1>;
// }

// // GuestGreeting
// function GuestGreeting(props) {
// 	return <h1>Please login.</h1>;
// }

// // Greeting
// function Greeting(props) {
// 	const isLoggedIn = props.isLoggedIn;
// 	if (isLoggedIn) {
// 		return <UserGreeting />;
// 	}
// 	return <GuestGreeting />;
// }
//////////////////////////////////////////////////

// function LoginButton(props) {
// 	return <button onClick={props.onClick}>Login</button>;
// }

// function LogoutButton(props) {
// 	return <button onClick={props.onClick}>Logout</button>;
// }

class LoginControl extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.state = { isLoggedIn: false };
	}

	handleLoginClick() {
		this.setState({ isLoggedIn: true });
	}

	handleLogoutClick() {
		this.setState({ isLoggedIn: false });
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn;
		let button;
		if (isLoggedIn) {
			button = <LogoutButton onClick={this.handleLogoutClick} />;
		} else {
			button = <LoginButton onClick={this.handleLoginClick} />;
		}

		return (
			<div>
				<Greeting isLoggedIn={isLoggedIn} />
				{button}
			</div>
		);
	}
}

export default LoginControl;
