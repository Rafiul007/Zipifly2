import React from 'react'
import { Button, TextField } from '@mui/material'

const DeliveryCalculator = () => {
    // use formik for form validation
    return (
        <div className="calculator-container">
            <div className="heading-container">
                <h1>Delivery Calculator</h1>
                <p>Get idea about shipment charge before shipment.</p>
            </div>
            <div className="calculator-input-container">
            <TextField id="outlined-basic" label="Weight(Max 10kg)"  variant="outlined" />
            <TextField id="outlined-basic" label="Cash Amount"  variant="outlined" />
            <TextField id="outlined-basic" label="Pickup Zone"  variant="outlined" />
            <TextField id="outlined-basic" label="Delivery Zone"  variant="outlined" />
            </div>
        </div>
    )
}

export default DeliveryCalculator