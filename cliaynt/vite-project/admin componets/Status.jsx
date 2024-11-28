import React, { useEffect, useState } from 'react';
import '../../vite-project/css/AddCustomer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faBan, faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
import useVaildation from '../src/Hooks/validation';
import api from '../src/API';

function Status() {
    useVaildation()
    const [status, setStatus] = useState([]);
    const [customerInfo, setCustomerInfo] = useState([]);
    const [getStatus, getSetStatus] = useState([])


    // Fetch vehicle statuses
    useEffect(() => {
        api.get('/auth/get-vehicle-status')
        
            .then(result => {
                if (result.data.Status) {
                    setStatus(result.data.Result);
                } else {
                    alert('Not found');
                }
            })
            .catch(err => console.log(err));
    }, []);

    // Fetch customer details
    useEffect(() => {
        const customerId = status[0]?.customer_id; // Assuming the first item's customer_id
        if (customerId) {
            api.get(`/auth/get-customer-status?id=${customerId}`)
            
                .then(result => {
                    if (result.data.Status) {
                        setCustomerInfo(result.data.Result);
                    } else {
                        alert('No customer data found');
                    }
                })
                .catch(err => console.error('Error fetching customer details:', err));
        }
    }, [status]);


    // Handle sending email

    const handleEmail = (email, name) => {
        api.post('/auth/send-email',{ email, name })
            .then(response => {
                if (response.data.Status) {
                    alert('Email sent successfully');
                } else {
                    alert('Failed to send email');
                }
            })
            .catch(err => console.error('Error sending email:', err));
    };




    // Handle status updates
    const handleStatusChange = (customerId, newStatus,customerEmail,customerName) => {

        api.put('/auth/update-status', { customerId, newStatus })

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
                                title: "Status Update!",
                                text: "Your Status has been changed.",
                                icon: "success"

                            });

                            if (newStatus === "Approved") {
                                handleEmail(customerEmail, customerName);
                            }

                            window.location.reload()

                        }
                    });

                    // Refetch the updated data


                } else {
                    alert('Failed to update status');
                }
            })
            .catch(err => console.error('Error updating status:', err));
    };

    useEffect(() => {
        api.get('/auth/get-update-status')
            .then(result => getSetStatus(result.data.Result))
            .catch(err => console.error(err));

    }, [])


    return (
        <div className='customer-add'>
            <div className='status-center'>
                <div className='order'>Orders</div>


                <div className="d-flex box-status p-3 box-status">
                    {/* Customer Name */}

                    <div>
                        <strong>Name</strong>
                        <ul>
                            {customerInfo.map(c => (
                                <li key={c.customer_id} className="mb-3">{c.customer_first_name}</li>

                            ))}
                        </ul>
                    </div>

                    {/* Customer Phone */}
                    <div className='status'>
                        <strong>Phone</strong>
                        <ul>
                            {customerInfo.map(c => (
                                <li key={c.customer_id} className="mb-3">{c.customer_phone}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Vehicle Model */}
                    <div className="box-two">
                        <strong>Model</strong>
                        <ul>
                            {status.map(v => (
                                <li key={v.vehicle_id} className="d-flex table-items">
                                    <div className="mb-3">{v.vehicle_model}</div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className=' '>
                        <strong>Status</strong>
                        {
                            getStatus.map(s => (
                                <div key={s.customer_id}  className='pending'>
                                    <div>{s.status}</div>
                                </div>
                            ))
                        }
                    </div>  

                    {/* Action Buttons */}
                    <div className="box-two">
                        <strong>Action</strong>
                        {customerInfo.map(v => (
                            <div key={v.customer_id} className="pending-button">
                                <button
                                    onClick={() => handleStatusChange(v.customer_id, 'Approved',v.customer_email,v.customer_first_name)}
                                    className="icon-button icone-pending"
                                >
                                    <FontAwesomeIcon icon={faCheck} />
                                </button>
                                <button
                                    onClick={() => handleStatusChange(v.customer_id, 'Pending')}
                                    className="icone-pending icone-pending"
                                >
                                    <FontAwesomeIcon icon={faHourglassHalf} />
                                </button>
                                <button
                                    onClick={() => handleStatusChange(v.customer_id, 'Rejected')}
                                    className=" ml-3 icone-pending"
                                >
                                    <FontAwesomeIcon icon={faBan} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Status;
