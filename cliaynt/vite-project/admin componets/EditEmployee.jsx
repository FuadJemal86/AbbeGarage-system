import React, { useState, useEffect } from 'react';
import '../../vite-project/css/AddCustomer.css';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import useVaildation from '../src/Hooks/validation';
import api from '../src/API';


function EditEmployee() {
    useVaildation()
    const { id } = useParams();
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        email: '',
        first: '',
        last: '',
        phone: '',
        category: ''
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        api.get(`/auth/edit-employee/${id}`)
            .then(result => {
                if (result.data.Status) {

                    const data = result.data.Result[0];
                    setEmployee({
                        email: data.employee_email,
                        first: data.employee_first_name,
                        last: data.employee_last_name,
                        phone: data.employee_phone,
                        category: data.employee_role
                    });
                } else {
                    setError("Failed to fetch employee data.");
                }
            })
            .catch(err => {
                console.error('Error fetching employee:', err);
                setError("An error occurred while fetching employee data.");
            })
            .finally(() => setLoading(false));
    }, [id]);

    // Handle input changes to update form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission to update employee data
    const handleSubmit = (e) => {
        e.preventDefault();
        api.put(`/auth/update_employee/${id}`)
            .then(result => {
                if (result.data.Status) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'customer update successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard'); // Redirect after successful update
                } else {
                    alert("Failed to update employee. Please try again.");
                }
            })
            .catch(err => {
                console.error('Error updating employee:', err);
                alert("An error occurred while updating the employee.");
            });
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className='left'>
            <div className="main-content">
                <h3 className="form-title">
                    Employees: {employee.email}
                </h3>
                <h3 className="form-title">
                    Edit: {employee.first} <span className="underline"></span>
                </h3>
                <form className="customer-form" onSubmit={handleSubmit}>
                    <input
                        name="first"
                        value={employee.first}
                        onChange={handleChange}
                        placeholder="First name"
                    />
                    <input
                        name="last"
                        value={employee.last}
                        onChange={handleChange}
                        placeholder="Last Name"
                    />
                    <input
                        name="email"
                        value={employee.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                    <input
                        name="phone"
                        value={employee.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                    />
                    <select
                        onChange={handleChange}
                        className='form-select mb-4'>
                        <option>{employee.category}</option>
                        <option>Employee</option>
                        <option>Driver</option>
                    </select>

                    <button className="submit-btn" type="submit">UPDATE</button>
                </form>
            </div>
        </div>
    );
}

export default EditEmployee;
