import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../../vite-project/css/AddCustomer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { faTrash, faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from 'sweetalert2';
import '../css/order.css';
import useVaildation from '../src/Hooks/validation';
import api from '../src/API';

function Detail() {
    useVaildation()
    const { id } = useParams();
    const [customerInfo, setCustomerInfo] = useState({
        year: '',
        make: '',
        model: '',
        type: '',
        mileage: '',
        tag: '',
        serial: '',
        color: '',
        image: '',
        name: '',
        email: '',
        phone: '',
        is_active: '',
        date: '',

    });

    const [carService, setCarService] = useState([]);

    const [closedBoxes, setClosedBoxes] = useState([]);

    // Fetch vehicle details
    useEffect(() => {
        api.get(`/auth/detail-order/${id}`)
            .then((result) => {
                if (result.data.Status) {
                    const data = result.data.Result;
                    setCustomerInfo((prev) => ({
                        ...prev,
                        year: data.vehicle_year,
                        make: data.vehicle_make,
                        model: data.vehicle_model,
                        type: data.vehicle_type,
                        mileage: data.vehicle_mileage,
                        tag: data.vehicle_tag,
                        serial: data.vehicle_serial,
                        color: data.vehicle_color,
                        customer_id: data.customer_id,
                        image: data.vehicle_image,
                    }));
                } else {
                    console.error('Error:', result.data.Error);
                }
            })
            .catch((error) => console.error('Error fetching vehicle details:', error));
    }, [id]);

    // Fetch customer information
    useEffect(() => {
        if (customerInfo.customer_id) {
            api.get(`/auth/get-customer-info?id=${customerInfo.customer_id}`)
                .then((result) => {
                    if (result.data.Status) {
                        const data = result.data.Result;
                        setCustomerInfo((prev) => ({
                            ...prev,
                            name: data.customer_first_name,
                            email: data.customer_email,
                            phone: data.customer_phone,
                            is_active: data.is_active,
                            date: data.added_date,
                        }));
                    } else {
                        console.error('Error:', result.data.Error);
                    }
                })
                .catch((error) => console.error('Error fetching customer details:', error));
        }
    }, [customerInfo.customer_id]);

    useEffect(() => {
        if (customerInfo.customer_id) {
            api.get(`/auth/get-servic?id=${customerInfo.customer_id}`)
            
                .then((result) => {
                    if (result.data.Status) {
                        setCarService(result.data.Result); // Set the full array of services
                    } else {
                        console.error('No services found:', result.data.Error);
                    }
                }).catch((error) => console.error('Failed to fetch services:', error));
        }

    }, [customerInfo.customer_id]);





    // Delete service
    const handleDelete = (serviceId) => {
        api.delete(`/auth/delete-service/${serviceId}`)

            .then((result) => {
                if (result.data.Status) {

                } else {
                    Swal.fire({
                        title: "Are you sure delete?",
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

                            window.location.reload()

                        }
                    });
                }
            })
            .catch((error) => console.error('Error deleting service:', error));
    };

    // Close service box
    const handleClose = (index) => {
        setClosedBoxes([...closedBoxes, index]);
    };

    return (
        <div className="">
            <div className=''>
                <div className="box">
                    <h2 className="detail-header">{customerInfo.name}</h2>
                    <p><strong>Email:</strong> {customerInfo.email}</p>
                    <p><strong>Phone:</strong> {customerInfo.phone}</p>
                    <p><strong>Active:</strong> {customerInfo.is_active ? 'Yes' : 'No'}</p>
                    <p><strong>Added Date:</strong> {customerInfo.date}</p>
                    <p>
                        <strong>Edit:</strong>{' '}
                        <Link to={`/dashboard/edit-customer/${customerInfo.customer_id}`} className="edit-icon">✏️</Link>
                    </p>
                </div>

                <div className=" mt-5 customer-add">
                    <div className='box'>
                        <div className="image">
                            <img src={`http://localhost:3032/Image/${customerInfo.image}`} alt="Vehicle" />
                        </div>
                        <h2 className="detail-header">{customerInfo.model}</h2>
                        <p><strong>Year:</strong> {customerInfo.year}</p>
                        <p><strong>Make:</strong> {customerInfo.make}</p>
                        <p><strong>Type:</strong> {customerInfo.type}</p>
                        <p><strong>Mileage:</strong> {customerInfo.mileage}</p>
                        <p><strong>Tag:</strong> {customerInfo.tag}</p>
                        <p><strong>Serial:</strong> {customerInfo.serial}</p>
                        <p><strong>Color:</strong> {customerInfo.color}</p>
                    </div>
                </div>

                <div className="customer-add">
                    <h2>Services</h2>
                    <div className='box'>
                        {carService.length > 0 ? (

                            carService.map((service, index) => (

                                !closedBoxes.includes(index) && (
                                    <div key={index} className="box">
                                        <div className="service-cloth">
                                            <FontAwesomeIcon
                                                icon={faTrash}
                                                className="edit-icons1"
                                                onClick={() => handleDelete(service.service_id)}
                                                style={{ cursor: 'pointer', marginLeft: '10px' }}
                                            />
                                            <button onClick={() => handleClose(index)}>
                                                <FontAwesomeIcon icon={faRectangleXmark} size="2x" color="red" />
                                            </button>
                                        </div>
                                        <div>
                                            <div className="mb-2 service-name">{service.service_name}</div>
                                            <div className="service-description">{service.service_description}</div>
                                        </div>
                                    </div>
                                )
                            ))
                        ) : (
                            <p>No services available.</p>
                        )}
                    </div>



                </div>
            </div>
        </div>
    );
}

export default Detail;
