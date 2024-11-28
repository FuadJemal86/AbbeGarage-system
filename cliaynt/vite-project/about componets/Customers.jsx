import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../vite-project/css/AddCustomer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'
import useVaildation from '../src/Hooks/validation';

function Customers() {
    useVaildation()
    const [Customer, SetCustomer] = useState([])


    useEffect(() => {

        axios.get('http://localhost:3032/auth/get-customer')
            .then(result => {
                if (result.data.Status) {
                    SetCustomer(result.data.Result)
                } else {
                    alert(result.data.Error)
                }
            })
            .catch(err => console.log(err))

    }, [])

    const handelDelete = (id) => {

        axios.delete('http://localhost:3032/auth/delete-customer/' + id)
            .then(result => {
                if (result.data.Status) {
                    Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Status has been changed.",
                                icon: "success"

                            });

                            window.location.reload()

                        }
                    });
                } else {
                    alert('customer not delete')
                }
            }).catch(err => console.log(err))
    }
    return (
        <div className='customer-add'>
            <h3 className="form-title">
                Cutomers : <span className="underline"></span>
            </h3>
            <div className='mt-3 table-box'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Added Date</th>
                            <th>Active</th>
                            <th>Edit/Info/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Customer.map(c => (
                                <tr className='customer-tabel'>
                                    <td className='td-color'>{c.customer_id}</td>
                                    <td className='td-color'>{c.customer_first_name}</td>
                                    <td className='td-color'>{c.customer_last_name}</td>
                                    <td>{c.customer_email}</td>
                                    <td>{c.customer_phone}</td>
                                    <td>{c.added_date}</td>
                                    <td>{c.is_active ? 'Yes' : 'No'}</td>
                                    <td>
                                        <div className='customer-icon'>
                                            <div className='customer-icons'>
                                                <Link to={`/dashboard/edit-customer/${c.customer_id}`}>
                                                    <FontAwesomeIcon icon={faPenToSquare} />
                                                </Link>
                                            </div>
                                            <div className='customer-icons'>
                                                <Link to={`/dashboard/customer-order/${c.customer_id}`}>
                                                    <FontAwesomeIcon icon={faCircleInfo} />
                                                </Link>
                                            </div>
                                            <span onClick={() => handelDelete(c.customer_id)} className='edit-icons1' style={{ cursor: 'pointer', marginLeft: '10px', color: 'red' }}>
                                                <FontAwesomeIcon icon={faTrash} />
                                            </span>
                                        </div>
                                    </td>



                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Customers
