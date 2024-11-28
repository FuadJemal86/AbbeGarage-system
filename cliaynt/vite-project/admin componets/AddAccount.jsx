import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../css/AddCustomer.css';
import api from '../src/API';
import useVaildation from '../src/Hooks/validation';

export default function AddAccount() {
    useVaildation(); // Custom validation hook

    const [admin, setAdmin] = useState({
        name: '',
        email: '',
        password: '',
        image: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        // Append form fields to FormData
        formData.append('name', admin.name);
        formData.append('email', admin.email);
        formData.append('password', admin.password);
        formData.append('image', admin.image);

        api.post('auth/add-admin', formData)
            .then(result => {
                if (result.data.Status) {
                    alert('Success');
                } else {
                    alert('The email already exists');
                }
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="admin-acc">
            <h3 className="form-title">Add Admin Account</h3>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    required
                    label="Full Name"
                    onChange={e => setAdmin({ ...admin, name: e.target.value })}
                />
                <TextField
                    required
                    label="Email"
                    placeholder="Email"
                    onChange={e => setAdmin({ ...admin, email: e.target.value })}
                />
                <TextField
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={e => setAdmin({ ...admin, password: e.target.value })}
                />
                <TextField
                    id="outlined-search"
                    placeholder="Profile"
                    type="file"
                    onChange={e => setAdmin({ ...admin, image: e.target.files[0] })}
                />
                <button type="submit" className="submit-btn">Add Account</button>
            </Box>
        </div>
    );
}
