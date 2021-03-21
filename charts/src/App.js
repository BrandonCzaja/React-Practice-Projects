import React, { Component } from "react";
import "./App.css";
import Chart from "./components/Chart.jsx";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chartData: {},
		};
	}

	componentWillMount() {
		this.getChartData();
	}

	getChartData() {
		// Ajax call here
		this.setState({
			chartData: {
				labels: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia"],
				datasets: [
					{
						label: "Population",
						data: [8601186, 4057841, 2679044, 2359480, 1711356, 1576596],
						backgroundColor: [
							"rgba(255,99,132,0.6)",
							"rgba(54,162,235,0.6)",
							"rgba(255,206,86,0.6)",
							"rgba(75,192,192,0.6)",
							"rgba(153,102,255,0.6)",
							"rgba(255,159,64,0.6)",
						],
					},
				],
			},
		});
	}

	render() {
		return (
			<div className="App">
				<Chart chartData={this.state.chartData} displayLegend={false} />
			</div>
		);
	}
}

export default App;
