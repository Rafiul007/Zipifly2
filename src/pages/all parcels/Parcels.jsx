import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import './Parcels.css'
import axios from 'axios';
import { Alert, Button, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
function Parcels() {
    const token = localStorage.getItem('token');
    const decodeToken = (token) => {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(atob(base64));
    };
    const userData = decodeToken(token);
    const userId = userData.userId;
    const username = userData.userName;
    const [parcelInfo, setParcelInfo] = useState([]);
    useEffect(() => {
        try {
            axios.get("http://localhost:3002/user/parcels/" + userId, {
                headers: { Authorization: "Bearer " + token },
            }).then((res) => {
                if (!res.data) throw new Error();
                else {
                    console.log("testing response data", res.data);
                    setParcelInfo(res.data);
                }
            })
                .catch((error) => {
                    console.error("Error fetching profile data: ", error);
                });
        } catch (error) {
            console.error("Error in useEffect: ", error);
        }
    }, [userId, token]);
    // const userId = userData.userId;

    //function for handle delete
    async function handleDelete(id) {
        await axios.delete(`http://localhost:3002/parcel/delete/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((response) => {
                alert("Successfully deleted parcel!");
                window.location.reload();
            })
            .catch((err) => {
                alert("Failed to delete parcel");
                console.log(err);
            });
    }
    return (
        <div className='table-container'>
            <Alert severity="info">You can only delete parcel where sender is you</Alert><br/>
            <Alert severity="warning">Deleting in transit parcel is not acceptable</Alert>
            <h1>Hello {username}, here is your parcel history</h1>
            <TableContainer>
                <Table>
                    <TableHead className="tableHeader">
                        <TableRow>
                            <TableCell>Parcel id</TableCell>
                            <TableCell>Sender</TableCell>
                            <TableCell>Receiver</TableCell>
                            <TableCell>Weight(gm)</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Cash Amount</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {parcelInfo && parcelInfo.length > 0 ? (
                            parcelInfo.map((info) => (
                                <TableRow key={info._id}>
                                    <TableCell>{info._id}</TableCell>
                                    <TableCell>{info.sender.username === username ? "You" : info.sender.username}</TableCell>
                                    <TableCell>{info.receiver.username === username ? "You" : info.receiver.username}</TableCell>
                                    <TableCell>{info.weight} gm.</TableCell>
                                    <TableCell>{info.category}</TableCell>
                                    <TableCell>{info.totalCash}TK</TableCell>
                                    <TableCell><Chip label={info.status} color='primary' variant="outlined" /></TableCell>
                                    <TableCell><Button variant="outlined" color='error' size='small' onClick={()=>handleDelete(info._id)}><DeleteIcon /></Button></TableCell>
                                </TableRow>
                            )))
                            : "No Parcels to Show"
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained"><Link to='/create-parcel'>Create a parcel</Link></Button>
        </div>
    )
}

export default Parcels