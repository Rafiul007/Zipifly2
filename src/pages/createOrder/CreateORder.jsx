import React from 'react'
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Autocomplete, FormControlLabel, Checkbox } from '@mui/material';
import './CreateOrder.css'
function CreateORder() {
    const category = [
        { label: "Electronics", value: 1 },
        { label: "Furniture", value: 2 },
        { label: "Clothing & Accessories", value: 3 },
        { label: "Home Appliances", value: 4 },
        { label: "Books & Stationery", value: 5 },
    ]
    return (
        <div className="create-order-container">
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
                </form>
            </div>

        </div>
    )
}

export default CreateORder