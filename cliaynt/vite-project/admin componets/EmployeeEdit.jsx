import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../vite-project/css/AddCustomer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Link } from 'react-router-dom';
import useVaildation from '../src/Hooks/validation';
import api from '../src/API';

function EmployeeEdit() {

    useVaildation()

    const [Employee, SetEmployee] = useState([]);

    useEffect(() => {
        api.get('/auth/get-employee')

            .then(result => {
                if (result.data.Status) {
                    SetEmployee(result.data.Result);
                } else {
                    alert(result.data.Error);
                }
            })
            .catch(err => console.log(err));
    }, []);

    const handelDelete = (id) => {
        api.delete('/auth/delete-employee/ + id')

            .then(result => {
                if (result.data.Status) {
                    window.location.reload();
                } else {
                    alert(result.data.Error)
                }
            }).catch(err => console.log(err))
    }

    return (
        <div className='customer-add'>
            <h2 className='empoloyees'>Empoyees</h2>
            <div className='admin-dashboard'>

                <div className='mt-3'>
                    <table className='table table-box'>
                        <thead>
                            <tr>
                                <th>Active</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Added Date</th>
                                <th>Role</th>
                                <th>Edit/Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Employee.map(c => (
                                    <tr key={c.employee_id} className='customer-table'>
                                        <td className='td-color'>{c.is_active ? 'Yes' : 'No'}</td>
                                        <td className='td-color'>{c.employee_first_name}</td>
                                        <td className='td-color'>{c.employee_last_name}</td>
                                        <td>{c.employee_email}</td>
                                        <td>{c.employee_phone}</td>
                                        <td>{c.added_date}</td>
                                        <td>{c.employee_role}</td>
                                        <td className='edit-icons'>
                                            <Link to={`/dashboard/edit-employee/${c.employee_id}`}>
                                                <FontAwesomeIcon icon={faPenToSquare} />
                                            </Link>
                                            <span onClick={() => handelDelete(c.employee_id)} className='edit-icons1' style={{ cursor: 'pointer', marginLeft: '10px' }}>
                                                <FontAwesomeIcon icon={faTrash} />
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default EmployeeEdit;
