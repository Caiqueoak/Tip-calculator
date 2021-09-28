import React, { useContext } from "react";
import "../styles/Form.scss";

import TipButton from "./3TipButton";
import Input from "./3Input";
import Account from "./3Account";
import { AmountValuesContext } from "./1App";

function Form(props: any) {
	const {icons, tipValues, handleCustomInput, customInput, activeState} = useContext(AmountValuesContext);

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
						icon={icons.bill}
					/>
				</section>

				{/* {TIP INPUT} */}
				<section className="input-datas">
					<h2 className="headings">Select Tip %</h2>
					<ol id="tip-buttons-list">
						{tipValues.map((tipValue: number) => (
							<TipButton
								activeState={activeState}
								tipValue={tipValue}
								key={tipValue}
							/>
						))}
						<li>
							<input
								onChange={handleCustomInput}
								value={customInput}
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
						id="people-number-input"
						icon={icons.people}
					/>
				</section>
			</main>

			{/* {ACCOUNT} */}
			<aside id="account-container">
				{/* {ACCOUNT OUTPUT} */}
				<Account />

				<button id="reset-button" type="reset">
					RESET
				</button>
			</aside>
		</form>
	);
}

export default Form;
