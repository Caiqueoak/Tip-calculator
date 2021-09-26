import React from 'react'
import dollarIcon from '../images/icon-dollar.svg'

function Amount(props:any) {
  return ( 
    <>
      <table>
        <th>{props.children}</th>
        <tr>/ person</tr>
      </table>
      <label>
        <img src={dollarIcon} alt="dollar symbol" />
        {props.valueAmount}
      </label>
    </>
   );
}

export default Amount;