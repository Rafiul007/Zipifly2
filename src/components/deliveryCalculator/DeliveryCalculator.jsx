import React from 'react'
import { TextField, Button, Autocomplete, FormControlLabel, Checkbox, Alert, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import './DeliveryCalculator.css'
const DeliveryCalculator = () => {
    const dis = [
        { label: "Dhaka", value: 1 },
        { label: "Rajshahi", value: 2 },
        { label: "Khulna", value: 3 },
        { label: "Chattogram", value: 4 },
        { label: " Sylhet", value: 5 },
        { label: " Mymensingh ", value: 6 },
        { label: " Rangpur", value: 7 },
    ]
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
                            labelId="pickup zone"
                            id="Pickup Zone"
                            name="Pickup Zone"
                            // value={formik.values.Pickup Zone}
                            label="Pickup Zone"
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            // error={formik.touched.Pickup Zone && Boolean(formik.errors.Pickup Zone)}
                        >
                            {dis.map((option) => (
                                <MenuItem key={option.value} value={option.label}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Drop zone</InputLabel>
                        <Select
                            labelId="Drop zone"
                            id="Drop zone"
                            name="Drop zone"
                            // value={formik.values.Drop zone}
                            label="Drop Zone"
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            // error={formik.touched.Drop zone && Boolean(formik.errors.Drop zone)}
                        >
                            {dis.map((option) => (
                                <MenuItem key={option.value} value={option.label}>
                                    {option.label}
                                </MenuItem>
                            ))}
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