import React from 'react'
import './Parcel.css'
import parcelImg from './parcel.png'
import Chip from '@mui/material/Chip';
function Parcel({ id, status, sender, receiver, weight, category, totalCash }) {
    return (
        <div className="parcel-card-container">
            <h1>Parcel Details</h1>
            <div class="card" >
                <div className="card-img">
                    <img src={parcelImg} alt="Box" />
                </div>

                <div class="content">
                    <div class="header">
                        <h3>Tracking ID: {id}</h3>
                    </div>
                    <div class="card-body">
                        <div className="status">
                            <span>Status: </span>
                            <Chip label={status} variant="outlined" color='primary' size='small' />
                        </div>
                        <p className="date">Date: March 30, 2022</p>
                        <p className="sender">Sender: {sender}</p>
                        <p className="receiver">Receiver: {receiver}</p>
                        <p className="weight">Weight: {weight}</p>
                        <p className="category">Category: {category}</p>
                        <p className="totalCash">Total: {totalCash}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Parcel