import * as React from "react";

import TipButton from "./3TipButton";
import Input from "./3Input";
import Account from "./3Account";

function Form(props: any) {
	return (
		<form id="main-container">
			{/* {BILL INPUT} */}
			<h2>Bill</h2>
			<Input
				type="number"
        step='0.01'
				id="bill-input"
				onChange={props.onChange}
				icon={props.icons.bill}
			/>

			{/* {TIP INPUT} */}
			<h2>Select Tip %</h2>
			<ol>
				{props.tipValues.map((tipValue: number) => (
					<TipButton
						onClick={props.onClick}
						tipValue={tipValue}
						key={tipValue}
					/>
				))}
				<li>
					<input
						onChange={props.onCustomChange}
						value={props.customInput}
            min='0'
            step='0.01'
						id="custom-tip-input"
						type="number"
						placeholder="Custom"
					/>
				</li>
			</ol>

			{/* {NUMBER OF PEOPLE	 INPUT} */}
			<h2>Number of People</h2>
			<Input
        type='number'
        step='0.01'
				onChange={props.onChange}
				id="people-number-input"
				icon={props.icons.people}
			/>

			{/* {ACCOUNT} */}
			<section id="account-container">
				{/* {ACCOUNT OUTPUT} */}

				<button type="reset">RESET</button>
			</section>
		</form>
	);
}

export default Form;
