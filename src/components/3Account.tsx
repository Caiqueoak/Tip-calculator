import React, { useContext } from "react";
import { AmountValuesContext } from "./1App";
import Amount from "./4Amount";
import '../styles/Account.scss'

function Account(props: any) {
	const {tipAmount, total} = useContext(AmountValuesContext);

	return (
		<div id='account-column'>
			<Amount valueAmount={tipAmount}>Tip Amount</Amount>
			<Amount valueAmount={total}>Total</Amount>
		</div>
	);
}

export default Account;
