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
                        <h2>Tracking ID: {id}</h2>
                    </div>
                    <div class="meta">
                        <div className="status">
                            <span>Status: </span>
                            <Chip label={status} variant="outlined" color='primary' size='small' />
                        </div>
                        <div className="date">Date: March 30, 2022</div>
                        <div className="sender">Sender: {sender}</div>
                        <div className="receiver">Receiver: {receiver}</div>
                        <div className="weight">Weight: {weight}</div>
                        <div className="category">Category: {category}</div>
                        <div className="totalCash">Total: {totalCash}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Parcel