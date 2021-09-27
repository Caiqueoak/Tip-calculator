import React, { useContext } from "react";
import "../styles/Form.scss";

import TipButton from "./3TipButton";
import Input from "./3Input";
import Account from "./3Account";

function Form(props: any) {
	return (
		<form id="main-container">
			{/* {INPUT DATA} */}
			<main id="input-data-container">
				{/* {BILL INPUT} */}
				<section className="input-datas">
					<h2 className="headings">Bill</h2>
					<Input
						type="number"
						step="0.01"
						id="bill-input"
						placeholder={0}
						onChange={props.onChange}
						icon={props.icons.bill}
					/>
				</section>

				{/* {TIP INPUT} */}
				<section className="input-datas">
					<h2 className="headings">Select Tip %</h2>
					<ol id="tip-buttons-list">
						{props.tipValues.map((tipValue: number) => (
							<TipButton
								activeState={props.activeState}
								onClick={props.onClick}
								tipValue={tipValue}
								key={tipValue}
							/>
						))}
						<li>
							<input
								onChange={props.onCustomChange}
								value={props.customInput}
								min="0"
								step="0.01"
								id="custom-tip-input"
								type="number"
								placeholder="Custom"
							/>
						</li>
					</ol>
				</section>

				{/* {NUMBER OF PEOPLE	 INPUT} */}
				<section className="input-datas">
					<h2 className="headings">Number of People</h2>
					<Input
						type="number"
						step="0.01"
						placeholder={0}
						onChange={props.onChange}
						id="people-number-input"
						icon={props.icons.people}
					/>
				</section>
			</main>

			{/* {ACCOUNT} */}
			<aside id="account-container">
				{/* {ACCOUNT OUTPUT} */}
				<Account tipAmount={props.tipAmount} total={props.total} />

				<button id="reset-button" type="reset">
					RESET
				</button>
			</aside>
		</form>
	);
}

export default Form;
