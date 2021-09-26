import React from 'react'
import Amount from './4Amount';

const Account = (props:any) => {

  

  return (
    <div>
      <Amount valueAmount={'0.00'} >
        Tip Amount
      </Amount>
      <Amount valueAmount={'0.00'} >
        Total
      </Amount>
    </div>
  )
}

export default Account;