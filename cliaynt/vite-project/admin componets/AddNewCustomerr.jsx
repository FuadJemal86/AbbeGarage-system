import React, { useState } from 'react';
import '../../vite-project/css/AddCustomer.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import api from '../src/API';

function AddNewCustomer() {
    const [Customer, SetCustomer] = useState({
        email: '',
        first: '',
        last: '',
        phone: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('/auth/addcustomer',Customer)

        // Send the customer data to the backend
            .then(result => {
                if (result.data.Status) {
                    // Show a success message with SweetAlert2
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Customer added successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // Redirect to the success page or reload
                } else {
                    // Handle errors, such as customer already existing
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'The email already exists!',
                        showConfirmButton: true,
                    });
                }
            })
            .catch(err => {
                console.error(err);
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'An error occurred. Please try again.',
                    showConfirmButton: true,
                });
            });
        
    };

    return (
        <div className='box'>
            <div className="main-content ">
                <h3 className="form-title">
                    Add a new customer <span className="underline"></span>
                </h3>
                <form className="customer-form" onSubmit={handleSubmit}>
                    <input
                        onChange={(e) => SetCustomer({ ...Customer, email: e.target.value })}
                        placeholder="Customer email"
                        type="email"
                        name="email"
                    />
                    <input
                        onChange={(e) => SetCustomer({ ...Customer, first: e.target.value })}
                        name="first"
                        type="text"
                        placeholder="Customer first name"
                        required
                    />
                    <input
                        onChange={(e) => SetCustomer({ ...Customer, last: e.target.value })}
                        name="last"
                        type="text"
                        placeholder="Customer last name"
                        required
                    />
                    <input
                        onChange={(e) => SetCustomer({ ...Customer, phone: e.target.value })}
                        name="phone"
                        type="tel"
                        placeholder="Customer phone (555-555-5555)"
                        required
                    />
                    <button type="submit" className="submit-btn">Add Customer</button>
                </form>
            </div>
        </div>
    );
}

export default AddNewCustomer;
