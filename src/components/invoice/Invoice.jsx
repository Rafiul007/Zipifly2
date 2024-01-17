import React, { useEffect, useState } from 'react'
import './Invoice.css'
import { Button } from '@mui/material'


function Invoice({ fullname, address, district, cashCollection,updateTotalCash }) {
  const [totalCash, setTotalCash] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  useEffect(() => {
    if (district === "Dhaka") setDeliveryCharge(60)
    else setDeliveryCharge(120);
  let total =  Number(cashCollection)+ Number(deliveryCharge);
  setTotalCash(total);
  updateTotalCash(total);
  }, [district,cashCollection,deliveryCharge,updateTotalCash])

  return (
    <div className="invoice-container">
      <h1>{fullname}</h1>
      <div className="address">
        <p>Your Pickup Address:</p>
        <p>{address}, {district}</p>
        <Button variant="text" size='small'>Change</Button>
      </div>
      <div className="delivery-charges">
        <h3>Delivery charges:</h3>
        <div className="cash">
          <p>Cash collection:</p>
          <span>{cashCollection}Tk</span>
        </div>
        <div className="cash">
          <p>Delivery charges:</p>
          <span>{deliveryCharge}Tk</span>
        </div>
      </div>
      <div className="total">
        <p>Total amount:</p>
        <span>{totalCash}Tk(cash one delivery)</span>
      </div>
    </div>
  )
}

export default Invoice