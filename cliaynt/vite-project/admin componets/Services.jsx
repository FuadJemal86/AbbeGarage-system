import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/order.css';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import useVaildation from '../src/Hooks/validation';
import api from '../src/API';

function Services() {

    useVaildation()
    const [carService, setCarService] = useState([]);
    const [service, setService] = useState({
        service: '',
        description: '',
    });
    const [closedBoxes, setClosedBoxes] = useState([]); // Track closed boxes

    const handleSubmit = async (e) => {
        e.preventDefault();
        

        try {
            api.post('/auth/add-garage-service', service)
            if (result.data.Status) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Service added successfully!',
                    showConfirmButton: false,
                    timer: 1500,
                });
                window.location.reload();
            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'The service already exists!',
                    showConfirmButton: true,
                });
            }
        } catch (error) {
            console.error('An error occurred:', error);
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Failed to add service!',
                showConfirmButton: true,
            });
        }
    };

    useEffect(() => {
        api.get('/auth/get-garage-servic')
        
            .then((result) => {
                if (result.data.Status) {
                    setCarService(result.data.Result);
                } else {
                    alert('No services found.');
                }
            })
            .catch((error) => {
                console.error('Failed to fetch services:', error.message);
            });
    }, []);

    const handleClose = (index) => {
        setClosedBoxes([...closedBoxes, index]); // Add the clicked box index to the closedBoxes array
    };

    const handelDelete = (id) => {
        api.delete('/auth/delete-garage-service/' + id)
        
            .then(result => {
                if (result.data.Status) {
                    window.location.reload();
                } else {
                    alert(result.data.Error)
                }
            }).catch(err => console.log(err))
    }

    return (
        <div className=''>
            <div className="">
                <h2>Services</h2> <span className="underline"></span>
                <div className=''>
                    {carService.length > 0 ? (
                        carService.map((c, index) => (
                            !closedBoxes.includes(index) && ( // Only render boxes not in closedBoxes
                                <div key={index} className="box">
                                    <div className="service-cloth">

                                        <span onClick={() => handelDelete(c.service_id)} className='edit-icons1 mr-3' style={{ cursor: 'pointer', marginLeft: '10px' }}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </span>

                                        <button onClick={() => handleClose(index)} aria-label="Close">
                                            <FontAwesomeIcon icon={faRectangleXmark} size="2x" color="red" />
                                        </button>

                                    </div>
                                    <div>
                                        <div className='mb-2 service-name'>{c.name}</div>
                                        <div className='service-description'>{c.description}</div>
                                    </div>
                                </div>
                            )
                        ))
                    ) : (
                        <p>No services available.</p>
                    )}
                </div>

                {/* Add Service Form */}
                <form onSubmit={handleSubmit}>
                    <div className='customer-add'>
                        <div className="form-title mt-3">
                            <h2>Add Services</h2>
                        </div>
                        <div className='' >
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

                        <div >
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
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Services;
