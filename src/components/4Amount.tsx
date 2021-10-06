import React from "react";
import dollarIcon from "../images/amounts-icon-dollar.svg";

const Amount = (props: any) => {
	return (
		<section className="amounts">
			<article className='value-per-person-column'>
				<p className="amount-names">{props.children}</p>
				<p className="per-person">/ person</p>
			</article>
			<label className="amount-values">
				<img className="dollar-icons" src={dollarIcon} alt="dollar symbol" />
				{props.valueAmount}
			</label>
		</section>
	);
};

export default Amount;
