import React from "react";
import dollarIcon from "../images/icon-dollar.svg";

const Amount = (props: any) => {
	return (
		<section className="amounts">
			<table className="amount-names">
				<tbody>
					<tr>
						<th>{props.children}</th>
					</tr>
					<tr>
						<td>/ person</td>
					</tr>
				</tbody>
			</table>
			<label className="amount-values">
				<img src={dollarIcon} alt="dollar symbol" />
				{props.valueAmount}
			</label>
		</section>
	);
};

export default Amount;
