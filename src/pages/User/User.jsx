import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './User.css'
import PersonIcon from '@mui/icons-material/Person';
import { Button } from '@mui/material';
function User({ onClose, profileInfo }) {
    //token decode function

    return (
        <div className='user-cont'>
            <div className='modal'>
                <div className='modal-header'>
                    <h2>Welcome, {profileInfo.fullname}!</h2>
                    <Button variant="text" onClick={onClose}>X</Button>
                </div>
                <div className='modal-content'>
                    <p><span>Username: </span> {profileInfo.username}</p>
                    <p><span>Email: </span>{profileInfo.email}</p>
                    <p><span>Contact Number: </span>{profileInfo.contactNumber}</p>
                </div>
            </div>
        </div>
    )
}

export default User