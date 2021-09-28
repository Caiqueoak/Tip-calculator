import React from 'react'
import dollarIcon from '../images/icon-dollar.svg'
import '../styles/Amount.scss'

const Amount = (props: any) => {
  return ( 
    <section className='amounts'>
      <table className='amount-names'>
        <th>{props.children}</th>
        <tr>/ person</tr>
      </table>
      <label className='amount-values'>
        <img src={dollarIcon} alt="dollar symbol" />
        {props.valueAmount}
      </label>
    </section>
   );
}

export default Amount;