import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import './DeliveryCalculator.css';

const DeliveryCalculator = () => {
    const dis = [
        { label: "Dhaka", value: 1 },
        { label: "Rajshahi", value: 2 },
        { label: "Khulna", value: 3 },
        { label: "Chattogram", value: 4 },
        { label: " Sylhet", value: 5 },
        { label: " Mymensingh ", value: 6 },
        { label: " Rangpur", value: 7 },
    ];

    const [pickup, setPickup] = useState('');
    const [drop, setDrop] = useState('');
    const [weight, setWeight] = useState('');
    const [cash, setCash] = useState('');
    const [total, setTotal] = useState(0)
    const handleSubmit = (e) => {
        e.preventDefault();

        // Access the state variables here
        console.log("Pickup:", pickup);
        console.log("Drop:", drop);
        console.log("Weight:", weight);
        console.log("Cash:", cash);
        // calculate total
        // if pickup === "Dhaka" and drop=== "Dhaka" total is 60tk
        if (pickup === "Dhaka" && drop === "Dhaka") {
            var t = 60 + Number(weight) * 10;
            setTotal(t)

        }
        else {
            var t = 120 + Number(weight) * 10;
            setTotal(t)
        }
    };
    console.log(total)
    return (
        <div className="calculator-container">
            <div className="heading-container">
                <h1>Delivery Calculator</h1>
                <p>Get an idea about the shipment charge before shipment.</p>
            </div>
            <form className="calculator-input-container" onSubmit={handleSubmit}>
                <div className="input-row">
                    <TextField
                        id="outlined-basic"
                        fullWidth
                        label="Weight (Max 10kg)"
                        variant="outlined"
                        onChange={(e) => setWeight(e.target.value)}
                    />
                    <TextField
                        id="outlined-basic"
                        fullWidth
                        label="Cash Amount"
                        variant="outlined"

                        onChange={(e) => setCash(e.target.value)}
                    />
                </div>
                <div className="input-row">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Pickup Zone</InputLabel>
                        <Select
                            labelId="pickup-zone"
                            id="pickup-zone"
                            name="pickup-zone"
                            label="Pickup Zone"

                            onChange={(e) => setPickup(e.target.value)}
                        >
                            {dis.map((option) => (
                                <MenuItem key={option.value} value={option.label}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Drop Zone</InputLabel>
                        <Select
                            labelId="drop-zone"
                            id="drop-zone"
                            name="drop-zone"
                            label="Drop Zone"
                            onChange={(e) => setDrop(e.target.value)}
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
                    <Button type="submit" variant="contained">
                        Check Rate
                    </Button>
                </div>
            </form>
            <div className="total">
                <p> Delivery rate is {total}</p>
                <p> Collectable: {total+Number(cash)}</p>
            </div>
        </div>
    );
};

export default DeliveryCalculator;
