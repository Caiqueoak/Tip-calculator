import React from "react";
import Input from "./Input";
import billIcon from '../images/icon-dollar.svg'
import '../styles/main.scss'

const App = () => {

	const icons = {
		bill: `url(${billIcon})`,
		people: "url(../images/icon-person.svg) no-repeat",
	};

	return (
		<>
			<h1 id="splitter-title">
				<div>SPLI</div>
				<div>TTER</div>
			</h1>

			<main id="main-container">
				<Input icon={icons.bill}>
					<h2>Bill</h2>
				</Input>
			</main>
		</>
	);
};

export default App;
