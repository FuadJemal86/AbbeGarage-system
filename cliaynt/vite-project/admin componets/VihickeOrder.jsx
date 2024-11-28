import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
import useVaildation from '../src/Hooks/validation';
import api from '../src/API';

function VihickeOrder() {
    useVaildation()
    const [query, setQuery] = useState(''); // Search input value
    const [customerVehicles, setCustomerVehicles] = useState([]); // All vehicles
    const [filteredVehicles, setFilteredVehicles] = useState([]); // Filtered vehicles
    const [isCloth, setCloth] = useState([])

    // Fetch vehicles and customer data when the component loads
    useEffect(() => {
        api.get('/auth/vehicle-info')

            .then(result => {
                if (result.data.Status) {
                    const vehicles = result.data.Result;

                    // Fetch customer info for each vehicle
                    const customerRequests = vehicles.map(vehicle =>
                        axios.get(`http://localhost:3032/auth/customer-info?id=${vehicle.customer_id}`)
                            .then(response => {
                                if (response.data.Status) {
                                    vehicle.customer_name = response.data.Result[0]?.customer_first_name || "Unknown";
                                } else {
                                    vehicle.customer_name = "Unknown";
                                }
                                return vehicle;
                            })
                            .catch(() => {
                                vehicle.customer_name = "Error loading name";
                                return vehicle;
                            })
                    );

                    // Once all requests complete, set the vehicles state
                    Promise.all(customerRequests).then(updatedVehicles => {
                        setCustomerVehicles(updatedVehicles); // Save all vehicles
                        setFilteredVehicles(updatedVehicles); // Show all by default
                    });
                } else {
                    alert(result.data.Error);
                }
            })
            .catch(() => alert("Failed to fetch vehicle info"));
    }, []);

    // Update search term and filter vehicles
    const handleInputChange = (event) => {
        const searchValue = event.target.value.toLowerCase();
        setQuery(searchValue);

        // Filter vehicles where name or model matches the search
        const filtered = customerVehicles.filter(vehicle =>
            vehicle.customer_name.toLowerCase().includes(searchValue) ||
            vehicle.vehicle_model.toLowerCase().includes(searchValue)
        );

        setFilteredVehicles(filtered); // Update the list to display
    };

    const handelCloth = (index) => {
        setCloth([...isCloth, index])

    }

    return (
        <div className=''>
            <div>
                <input
                    className='serch'
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={handleInputChange}
                    style={{
                        padding: '8px',
                        fontSize: '16px',
                        width: '100%',
                        maxWidth: '300px',
                        borderRadius: '30px',
                        border: '1px solid #ccc',
                        marginBottom: '20px'

                    }}
                />
            </div>


            <div className=''>
                {filteredVehicles.map((vehicle, index) => (

                    !isCloth.includes(index) && (

                        <div key={index} className='box-vehicle boxs mb-5'>
                            <span onClick={() => handelCloth(index)} className='edit-icons1 mr-3 delete-icone' style={{ cursor: 'pointer', marginLeft: '10px' }}>
                                <FontAwesomeIcon icon={faRectangleXmark} size="2x" color="red" />
                            </span>
                            <div className='textt'>Customer Name: {vehicle.customer_name}</div>
                            <div className='textt'>Customer Car: {vehicle.vehicle_model}</div>
                            <div className='detail-class textt fs-3'>
                                <Link to={`/dashboard/ditail/${vehicle.vehicle_id}`}>
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                </Link>
                            </div>
                            
                        </div>
                    )
                ))}

            </div>



        </div>
    );
}

export default VihickeOrder;
