import React, { useContext } from "react";

import TipButton from "./3TipButton";
import Input from "./3Input";
import Account from "./3Account";
import { active, AmountValuesContext, inactive } from "./1App";

function Form(props: any) {
	const {icons, tipValues, handleCustomInput, customInput, idActivated, handleResetClick} = useContext(AmountValuesContext);

	return (
		<form id="main-container">
			{/* {INPUT DATA} */}
			<main id="input-data-container">
				{/* {BILL INPUT} */}
				<section className="input-datas">
					<Input
						step="0.01"
						id="bill-input"
						placeholder={0}
						icon={icons.bill}
					>Bill</Input>
				</section>

				{/* {TIP INPUT} */}
				<section>
					<h2 className="headings">Select Tip %</h2>
					<ol id="tip-buttons-list">
						{tipValues.map((tipValue: number, index:number) => {
							const toggleState = index === idActivated ? active : inactive;
							return (
							<TipButton
								tipValue={tipValue}
								key={tipValue}
								id={index}
								toggleState={toggleState}
							/>
							)
						}
						)}
						<li>
							<input
								onChange={handleCustomInput}
								value={customInput}
								onClick={handleCustomInput}
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
					<Input
						step="0.01"
						placeholder={0}
						id="people-number-input"
						icon={icons.people}
					>Number of People</Input>
				</section>
			</main>

			{/* {ACCOUNT} */}
			<aside id="account-container">
				{/* {ACCOUNT OUTPUT} */}
				<Account />

				<button id="reset-button" type="reset" onClick={handleResetClick}>
					RESET
				</button>
			</aside>
		</form>
	);
}

export default Form;