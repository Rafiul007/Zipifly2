import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Autocomplete, FormControlLabel, Checkbox, Alert } from '@mui/material';
import './CreateOrder.css'
import Invoice from '../../components/invoice/Invoice';
import { Link } from 'react-router-dom';
function CreateORder() {
    const storedToken = localStorage.getItem('token');
    const [token, setToken] = useState(storedToken || null);
    //function to decode jwt token
    const decodeToken = (token) => {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(atob(base64));
    };
    const userData = decodeToken(token);
    const userId = userData.userId;
    const [profileInfo, setProfileInfo] = useState({
        username: "",
        email: "",
        contactNumber: "",
        fullname: ""
    });
    useEffect(() => {
        try {
            axios.get("http://localhost:3002/user/profile/" + userId, {
                headers: { Authorization: "Bearer " + token },
            })
                .then((res) => {
                    if (!res.data) throw new Error();
                    else {
                        const { username, email, contactNumber, fullname } = res.data;
                        setProfileInfo({
                            username: username || "",
                            email: email || "",
                            contactNumber: contactNumber || "",
                            fullname: fullname || ""
                        });
                    }
                })
                .catch((error) => {
                    console.error("Error fetching profile data: ", error);
                });
        } catch (error) {
            console.error("Error in useEffect: ", error);
        }
    }, [userId, token]);


    const category = [
        { label: "Electronics", value: 1 },
        { label: "Furniture", value: 2 },
        { label: "Clothing & Accessories", value: 3 },
        { label: "Home Appliances", value: 4 },
        { label: "Books & Stationery", value: 5 },
    ]
    return (
        <div className="create-order-container">
            <div className="pack-cont">
                <div className="packaging">
                    <h1>Packaging convenience!</h1>
                    <p>Worried about the packaging of your parcel? Don't worry, the right packaging solution is now available at Zipifly. Order now...</p>
                    <Button variant="contained" color="primary">Order now</Button>
                </div>
            </div>
            <Alert severity="info">Parcel requests made after 3 pm will be picked the next day</Alert>
            <div className="form-cont">
                <div className="left-side">
                    <h1>Create Order</h1>
                    <div className="form-section">
                        <form className='form-input-container'>
                            <h2>Customer information</h2>
                            <TextField
                                fullWidth
                                id="username"
                                name="username"
                                label="Username"
                                type="username"
                            //   value={formik.values.password}
                            //   onChange={formik.handleChange}
                            //   onBlur={formik.handleBlur}
                            //   error={formik.touched.password && Boolean(formik.errors.password)}
                            //   helperText={formik.touched.password && formik.errors.password}
                            />
                            <h2>Delivery information</h2>
                            <div className="delivery-info-container">
                                <div className='invoice-fields'>
                                    <TextField
                                        fullWidth
                                        id="invoice"
                                        name="invoice"
                                        label="Invoice ID (optional)"
                                        type="text"
                                    //   value={formik.values.password}
                                    //   onChange={formik.handleChange}
                                    //   onBlur={formik.handleBlur}
                                    //   error={formik.touched.password && Boolean(formik.errors.password)}
                                    //   helperText={formik.touched.password && formik.errors.password}
                                    />
                                    <TextField
                                        fullWidth
                                        id="weight"
                                        name="weight"
                                        label="Weight (gm)"
                                        type="number"
                                    //   value={formik.values.password}
                                    //   onChange={formik.handleChange}
                                    //   onBlur={formik.handleBlur}
                                    //   error={formik.touched.password && Boolean(formik.errors.password)}
                                    //   helperText={formik.touched.password && formik.errors.password}
                                    />
                                </div>
                                <div className='cash-fields'>
                                    <TextField
                                        fullWidth
                                        id="cash-collection"
                                        name="cash-collection"
                                        label="Cash Collection Amount"
                                        type="number"
                                    //   value={formik.values.password}
                                    //   onChange={formik.handleChange}
                                    //   onBlur={formik.handleBlur}
                                    //   error={formik.touched.password && Boolean(formik.errors.password)}
                                    //   helperText={formik.touched.password && formik.errors.password}
                                    />
                                    <TextField
                                        fullWidth
                                        id="selling-price"
                                        name="selling-price"
                                        label="Selling price of the product"
                                        type="number"
                                    //   value={formik.values.password}
                                    //   onChange={formik.handleChange}
                                    //   onBlur={formik.handleBlur}
                                    //   error={formik.touched.password && Boolean(formik.errors.password)}
                                    //   helperText={formik.touched.password && formik.errors.password}
                                    />
                                </div>
                                <div className="category-fields">
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        fullWidth
                                        options={category}
                                        renderInput={(params) => <TextField {...params} label="Category" />}
                                    />
                                </div>
                            </div>
                            <div className="btn-cont">
                                <Button color="success" variant="contained" type="submit">Create</Button>
                                <Button color="error" variant="outlined"><Link to='/welcome'>Cancel</Link></Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="right-side">
                    <Invoice fullname={profileInfo.fullname} />
                </div>
            </div>

            {/* https://codeculturepro.medium.com/5-simple-steps-for-authentication-and-authorization-in-mern-stack-952fa31fe2ae */}

        </div>
    )
}

export default CreateORder