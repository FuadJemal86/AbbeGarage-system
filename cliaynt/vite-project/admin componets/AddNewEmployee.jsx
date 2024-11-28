import React from 'react'
import '../../vite-project/css/AddCustomer.css';
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';
import InputMask from 'react-input-mask';
import api from '../src/API';
import useVaildation from '../src/Hooks/validation';

function AddNewEmployee() {
    useVaildation()
    const [Employe, SetEmploye] = useState({ data: '' });
    const [Employee, SetEmployee] = useState({
        email: '',
        first: '',
        last: '',
        phone: '',
        data: '',
        category: '',
        password: ''


    })
    const handelsubmit = (e) => {
        e.preventDefault();
        api.post('/auth/addemployee',Employee)

            .then(result => {
                if (result.data.Status) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'employee added successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'The email already exists!',
                        showConfirmButton: true,
                    });
                }
            })
            .catch(err => {
                console.log(err)
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'An error occurred. Please try again.',
                    showConfirmButton: true,
                });
            })

    }
    return (
        <div className=''>
            <div className="main-content">
                <h3 className="form-title">
                    Add a new Employee <span className="underline"></span>
                </h3>
                <form className="customer-form box" onSubmit={handelsubmit}>
                    <input
                        onChange={e => SetEmployee({...Employee, email: e.target.value })}
                        type="email"
                        placeholder="Employee email" required />

                    <input type="text"
                        onChange={e => SetEmployee({...Employee, first: e.target.value })}
                        placeholder="Employee first name" required />

                    <input type="text"
                        onChange={e => SetEmployee({...Employee, last: e.target.value })}
                        placeholder="Employee last name" required />

                    <input type="tel"
                        onChange={e => SetEmployee({...Employee, phone: e.target.value })}
                        placeholder="Employee phone (555-555-5555)" required />


                    <select
                        onChange={e => SetEmployee({ ...Employee, category: e.target.value })}
                        className='form-select mb-4'>
                        <option>Employee</option>
                        <option>Driver</option>
                    </select>
                    <input
                        onChange={e => SetEmployee({ ...Employee, password: e.target.value })}
                        type="tel"
                        placeholder="Employee password" required />

                    <button type="submit" className="submit-btn">Add Employee</button>
                </form>
            </div>

        </div>
    )
}

export default AddNewEmployee
