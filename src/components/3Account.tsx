import React, { useContext } from "react";
import Amount from "./4Amount";

function Account(props: any) {
	return (
		<div>
			<Amount valueAmount={props.tipAmount}>Tip Amount</Amount>
			<Amount valueAmount={props.total}>Total</Amount>
		</div>
	);
}

export default Account;
