import React from 'react'
import './Invoice.css'
import { Button } from '@mui/material'
function Invoice() {
  return (
    <div className="invoice-container">
      <h1>mrRafie</h1>
      <div className="address">
        <p>Your Pickup Address:</p>
        <p>7/A north south twin tower</p>
        <Button variant="text" size='small'>Change</Button>
      </div>
      <div className="delivery-charges">
        <h3>Delivery charges:</h3>
        <div className="cash">
          <p>Cash collection:</p>
          <span>$150</span>
        </div>
        <div className="cash">
          <p>Delivery charges:</p>
          <span>$50</span>
        </div>
        <div className="cash">
          <p>COD:</p>
          <span>$00</span>
        </div>
      </div>
      <div className="total">
        <p>Total amount:</p>
        <span>$200</span>
      </div>
    </div>
  )
}

export default Invoice