import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../vite-project/css/AddCustomer.css';
import Swal from 'sweetalert2';
import useVaildation from '../src/Hooks/validation';
import api from '../src/API';

function EditCustomer() {
    useVaildation()
    const { id } = useParams();
    const navigate = useNavigate();

    const [customer, setCustomer] = useState({
        email: '',
        first: '',
        last: '',
        phone: ''
    });

    const [error, setError] = useState('');

    useEffect(() => {
        api.get(`/auth/edit-customer/${id}`)
            .then(result => {
                if (result.data.Status) {
                    const data = result.data.Result[0];
                    setCustomer({
                        email: data.customer_email,
                        first: data.customer_first_name,
                        last: data.customer_last_name,
                        phone: data.customer_phone
                    });
                } else {
                    setError("Failed to fetch customer data.");
                }
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api.put(`/auth/update_customer/${id}`)
            .then(result => {
                if (result.data.Status) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'customer update successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/Customers');
                } else {
                    alert("Failed to update customer. Please try again.");
                }
            })
            .catch(err => {
                console.error('Error updating customer:', err);
                alert("An error occurred while updating the customer.");
            });
    };

    return (
        <div className='left'>
            <div className="main-content">
                <h3 className="form-title">
                    Edit : {customer.first} {customer.last}<span className="underline"></span>
                </h3>
                <span className='form-title mb-2'>Customer email:<div className='emails'>{customer.email}</div></span>
                <form className="customer-form" onSubmit={handleSubmit}>
                    <input
                        name="first"
                        value={customer.first}
                        onChange={handleChange}
                        type="text"
                        placeholder="First Name"
                        required
                    />

                    <input
                        name="last"
                        value={customer.last}
                        onChange={handleChange}
                        type="text"
                        placeholder="Last Name"
                        required
                    />

                    <input
                        name="email"
                        value={customer.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Email"
                        required
                    />

                    <input
                        name="phone"
                        value={customer.phone}
                        onChange={handleChange}
                        type="text"
                        placeholder="Phone Number"
                        required
                    />

                    <button type="submit" className="submit-btn">UPDATE</button>
                </form>
                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    );
}

export default EditCustomer;
