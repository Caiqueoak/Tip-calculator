import React from "react";
import dollarIcon from "../images/amounts-icon-dollar.svg";

const Amount = (props: any) => {
	return (
		<section className="amounts">
			<table>
				<tbody>
					<tr>
						<th className="amount-names">{props.children}</th>
					</tr>
					<tr>
						<td className="per-person">/ person</td>
					</tr>
				</tbody>
			</table>
			<label className="amount-values">
				<img className="dollar-icons" src={dollarIcon} alt="dollar symbol" />
				{props.valueAmount}
			</label>
		</section>
	);
};

export default Amount;
