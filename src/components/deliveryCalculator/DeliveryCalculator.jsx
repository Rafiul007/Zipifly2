import React from 'react'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import './DeliveryCalculator.css'
const DeliveryCalculator = () => {
    // use formik for form validation
    return (
        <div className="calculator-container">
            <div className="heading-container">
                <h1>Delivery Calculator</h1>
                <p>Get idea about shipment charge before shipment.</p>
            </div>
            <div className="calculator-input-container">
                <div className="input-row">
                    <TextField id="outlined-basic" fullWidth label="Weight(Max 10kg)" variant="outlined" />
                    <TextField id="outlined-basic" fullWidth label="Cash Amount" variant="outlined" />
                </div>
                <div className="input-row">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Pickup Zone</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="Pickup Zone"
                        // onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Delivery Zone</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="Delivery Zone"
                        // onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="check-btn">
                    <Button variant="contained">Check Rate</Button>
                </div>
            </div>
        </div>
    )
}

export default DeliveryCalculator