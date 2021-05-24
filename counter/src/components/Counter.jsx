// Source: https://wsvincent.com/react-counter/
import React from "react";

class Clock extends React.Component {
	state = {
		count: 0,
	};

	handleClick = (event) => {
		// This will work without prevState => just remove prevState, and change count: prevState.count to count: count
		// Check the docs to see if it is preferred to use it or not

		this.setState((prevState, { count }) => ({
			count: prevState.count + 1,
		}));
	};

	render() {
		return (
			<>
				<button onClick={this.handleClick}>Click Me!</button>
				<p>{this.state.count}</p>
			</>
		);
	}
}

export default Clock;
