import React, { useState, useEffect } from 'react';
import '../css/order.css';
import '../../vite-project/css/AddCustomer.css';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import useVaildation from '../src/Hooks/validation';
import api from '../src/API';

function Order() {
    useVaildation()
    const { id } = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const [service, setService] = useState({
        customer_id: id,
        service: '',
        description: '',
    });


    // Functions to handle modal open/close
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    // State for storing customer details
    const [customer, setCustomer] = useState({
        email: '',
        first: '',
        last: '',
        phone: '',
        is_active: ''
    });


    const [vehicle, setVehicle] = useState({
        vehicle_year: '',
        vehicle_make: '',
        vehicle_model: '',
        vehicle_type: '',
        vehicle_mileage: '',
        vehicle_tag: '',
        vehicle_serial: '',
        vehicle_color: '',
        customer_id: id, // Associate the vehicle with the current customer
        vehicle_image: '' // Holds the uploaded image
    });

    // Handle form submission for adding a new vehicle
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        // Append each field to the FormData object
        formData.append('vehicle_year', vehicle.vehicle_year);
        formData.append('vehicle_make', vehicle.vehicle_make);
        formData.append('vehicle_model', vehicle.vehicle_model);
        formData.append('vehicle_type', vehicle.vehicle_type);
        formData.append('vehicle_mileage', vehicle.vehicle_mileage);
        formData.append('vehicle_tag', vehicle.vehicle_tag);
        formData.append('vehicle_serial', vehicle.vehicle_serial);
        formData.append('vehicle_color', vehicle.vehicle_color);
        formData.append('customer_id', vehicle.customer_id);
        formData.append('image', vehicle.vehicle_image); // Append the uploaded file

        // Submit the form data to the backend
        api.post('/auth/add_vehicle', formData)
        
            .then(result => {
                if (result.data.Status) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'vehicle added successfully!',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    setIsOpen(false); // Close modal on success
                } else {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Failed to add vehicle!',
                        showConfirmButton: true,
                    });
                }
            })
            .catch(err => console.log(err));
    };

    // Fetch customer details when the component loads
    useEffect(() => {
        api.get(`/auth/edit-customer/${id}`)

            .then(result => {
                if (result.data.Status) {
                    const data = result.data.Result[0];
                    setCustomer({
                        email: data.customer_email,
                        first: data.customer_first_name,
                        last: data.customer_last_name,
                        phone: data.customer_phone,
                        is_active: data.is_active
                    });
                } else {
                    alert("Failed to fetch customer data.");
                }
            })
            .catch(err => console.log(err));
    }, [id]);


    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post('http://localhost:3032/auth/add-service', service,
                {
                    headers: {
                        token : localStorage.getItem('token')
                    }
                }
            );
            if (result.data.Status) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Service added successfully!',
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Service addition failed!',
                    showConfirmButton: true,
                });
            }
        } catch (error) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Failed to add service. Please try again later!',
                showConfirmButton: true,
            });
        }
    };

    return (
        <div>
            <div className="containerr">
                {/* Sidebar navigation */}
                <div className="sidebarr">
                    <div className="nav-item active">
                        <div className="circle">Info</div>
                    </div>
                    <div className="nav-item">
                        <div className="circle">Cars</div>
                    </div>
                    <div className="nav-item">
                        <div className="circle">Orders</div>
                    </div>
                </div>

                {/* Main content area */}
                <div className="main-content">
                    {/* Customer information */}
                    <div className="customer-info">
                        <h2>Customer: {customer.first}</h2>
                        <p><strong>Email:</strong> {customer.email}</p>
                        <p><strong>Phone Number:</strong> {customer.phone}</p>
                        <p><strong>Active Customer:</strong> {customer.is_active ? 'Yes' : 'No'}</p>
                        <p><strong>Edit customer info:</strong> <span className="edit-icon">✏️</span></p>
                    </div>

                    {/* Vehicle section */}
                    <div className="vehicles-section">
                        <h3>Vehicles of {customer.first}</h3>
                        <div className="no-vehicle">No vehicle found</div>
                        <button onClick={handleOpen} className="add-vehicle-btn">Add New Vehicle</button>
                    </div>

                    {/* Modal for adding a new vehicle */}
                    {isOpen && (
                        <div className=" box">
                            <div className='service-cloth'>
                                <button className="" onClick={handleClose}>
                                    <FontAwesomeIcon icon={faRectangleXmark} size="2x" color="red" />
                                </button>
                            </div>
                            <div className='add-vehicle'>
                                <div className="form-title">Add a New Vehicle</div>
                                <form className="customer-form" onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        placeholder="Vehicle Year"
                                        onChange={e => setVehicle({ ...vehicle, vehicle_year: e.target.value })}
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Vehicle Make"
                                        onChange={e => setVehicle({ ...vehicle, vehicle_make: e.target.value })}
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Vehicle Model"
                                        onChange={e => setVehicle({ ...vehicle, vehicle_model: e.target.value })}
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Vehicle Type"
                                        onChange={e => setVehicle({ ...vehicle, vehicle_type: e.target.value })}
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Vehicle Mileage"
                                        onChange={e => setVehicle({ ...vehicle, vehicle_mileage: e.target.value })}
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Vehicle Tag"
                                        onChange={e => setVehicle({ ...vehicle, vehicle_tag: e.target.value })}
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Vehicle Serial"
                                        onChange={e => setVehicle({ ...vehicle, vehicle_serial: e.target.value })}
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Vehicle Color"
                                        onChange={e => setVehicle({ ...vehicle, vehicle_color: e.target.value })}
                                        required
                                    />
                                    <input
                                        type="file"
                                        onChange={(e) => setVehicle({ ...vehicle, vehicle_image: e.target.files[0] })}
                                        required
                                    />
                                    <button type="submit" className="submit-btn">Add Vehicle</button>
                                </form>
                            </div>
                        </div>
                    )}
                    {/* Orders section */}
            
                    <div className="orders-section">
                        <h3>Orders of {customer.first}</h3>
                    </div>
                    <form onSubmit={HandleSubmit}>
                        <div className="form-title mt-3">
                            <h2>Add Services</h2>
                        </div>
                        <div>
                            <input
                                style={{
                                    padding: '8px',
                                    fontSize: '16px',
                                    width: '100%',
                                    maxWidth: '300px',
                                    borderRadius: '5px',
                                    border: '1px solid #ccc',
                                }}
                                onChange={(e) => setService({ ...service, service: e.target.value })}
                                placeholder="Service name"
                                type="text"
                                className="text"
                                value={service.service}
                            />
                        </div>

                        <div>
                            <textarea
                                style={{
                                    padding: '8px',
                                    fontSize: '16px',
                                    width: '100%',
                                    maxWidth: '300px',
                                    borderRadius: '5px',
                                    border: '1px solid #ccc',
                                }}
                                onChange={(e) => setService({ ...service, description: e.target.value })}
                                placeholder="Service description"
                                className="text"
                                value={service.description}
                            />
                        </div>
                        <button className="theme-btn btn-style-one">ADD SERVICE</button>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Order;
