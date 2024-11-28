import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../AbeGarageCustomTemplate/assets/css/style.css';
import '../../AbeGarageCustomTemplate/assets/css/responsive.css';
import '../../AbeGarageCustomTemplate/assets/css/color.css';
import '../../vite-project/css/AddCustomer.css';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { FaPlay, FaArrowRight, FaCogs, FaCarBattery, FaTachometerAlt } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faUser, faBars, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useVaildation from '../src/Hooks/validation';
import api from '../src/API';
import { LinearProgress } from '@mui/material';
import Typography from '@mui/material/Typography';
import { BarChart } from '@mui/x-charts/BarChart';



function LinearProgressWithLabel(props) {
    return (
        <div className=''>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '25px', width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '600' }}>
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>


                <Box sx={{ width: '100%', mr: 2 }}>
                    <LinearProgress variant="determinate" {...props} />
                </Box>


            </Box>
        </div>
    );
}




function AdminDashbord() {




    useVaildation()
    const [serviceTotal, setServiceTotal] = useState()
    const [customerTotal, setCustomerTotal] = useState()
    const [approveTotal, setApprove] = useState()
    const [employee, setEmpoyee] = useState()
    const [progress, setProgress] = useState(10);
    // const [admins, setAdmin] = useState([])

    useEffect(() => {
        serviceCount()
        approvedCount()
        customerCount()
        employeeCount()

        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };


    }, [])


    const serviceCount = () => {
        api.get('/auth/service_count')

            .then(result => {
                if (result.data.Status) {
                    setServiceTotal(result.data.Result[0].services)
                }
            }).catch(err => console.log(err))
    }
    const customerCount = () => {
        api.get('/auth/customer_count')

            .then(result => {
                if (result.data.status) {
                    setCustomerTotal(result.data.Result[0].customers)
                }
            }).catch(err => console.log(err))
    }
    const approvedCount = () => {
        api.get('/auth/approve_count')

            .then(result => {
                if (result.data.Status) {
                    setApprove(result.data.Result[0].approve)
                }
            }).catch(err => console.log(err))
    }

    const employeeCount = () => {
        api.get('/auth/employee_count')

            .then(result => {
                if (result.data.Status) {
                    setEmpoyee(result.data.Result[0].employee)
                }
            }).catch(err => console.log(err))
    }


    const data = [
        { name: 'Active Users', value: 400 },
        { name: 'Inactive Users', value: 300 },
        { name: 'Pending Approval', value: 200 },
        { name: 'Rejected', value: 100 }
    ];

    // Colors for the chart
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const pieData = [
        { name: 'Approved Orders', value: approveTotal || 0 },
        { name: 'Pending Orders', value: 100 - (approveTotal || 0) }, // Example of pending calculation
    ];



    return (
        <div>
            <div className=''>
                <h2 className='admin-text'></h2>
                <div className='d-flex cards'>
                    <div>
                        <div className='box-dash'>
                            <div className=' d-flex'>
                                <div className='card-text'>TOTAL SERVICES</div>
                                <div className='dolar'><div className='dollar-icon'> <FontAwesomeIcon icon={faDollarSign} /></div></div>

                            </div>
                            <div className='counter order-text'>{serviceTotal}</div>
                        </div>

                    </div>
                    <div className='box-dash'>
                        <div className=' d-flex'>
                            <div className='card-text'>TOTAL CUSTOMERS</div>
                            <div className='product'><div className='produc-icon'><FontAwesomeIcon icon={faUser} /></div></div>
                        </div>
                        <div className='counter order-text'>{customerTotal}</div>
                    </div>
                    <div className='box-dash'>
                        <div className='d-flex'>
                            <div className='card-text'>ORDER COMPLETED</div>
                            <div className='order-com'><div className='order-icon'><FontAwesomeIcon icon={faBars} /></div>
                            </div>
                        </div>
                        <div className='order-pro'>{approveTotal}</div>
                        <div className='order-progrss'> <LinearProgressWithLabel value={progress} /></div>
                    </div>
                    <div className='box-dash'>
                        <div className=' d-flex'>
                            <div className='card-text'>TOTAL EMPLOYEE</div>
                            <div className='sale'><div className='sale-icon'><FontAwesomeIcon icon={faUserGroup} /></div></div>

                        </div>
                        <div className='counter order-text'>{employee}</div>
                    </div>

                </div>

                <div className='d-flex'>
                    <div className=' box-chart chart' style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', marginTop: '20px' }}>
                        <PieChart width={400} height={400}>
                            <Pie
                                data={pieData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={110}
                                paddingAngle={5}
                                fill="#8884d8"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </div>
                    <div className='box-chart chart'>
                        <BarChart
                            series={[
                                { data: [35, 44, 24, 34] },
                                { data: [51, 6, 49, 30] },
                                { data: [15, 25, 30, 50] },
                                { data: [60, 50, 15, 25] },
                            ]}
                            height={340}
                            xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
                            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                        />
                    </div>
                </div>
                <div>

                </div>
                <section className="services-section ">
                    <div className="auto-container">
                        <div className="sec-title style-two">
                            <div className="textt">Bring to the table win-win survival strategies to ensure proactive domination. At
                                the end of the day, going forward, a new normal that has evolved from generation X is on the
                                runway heading towards a streamlined cloud solution.</div>
                        </div>
                        <div className="row">
                            {/* Repeatable service blocks */}
                            <div className="col-lg-4 service-block-one">
                                <div className="inner-box hvr-float-shadow">
                                    <h5>OPEN FOR ALL</h5>
                                    <h2>All Order</h2>
                                    <a href="#" className="read-more">read more +</a>
                                    <div className="icon"><span className=""><FaCogs /></span></div>
                                </div>
                            </div>
                            <div className="col-lg-4 service-block-one">
                                <div className="inner-box hvr-float-shadow">
                                    <h5>OPEN FOR ALL</h5>
                                    <h2>Employees</h2>
                                    <a href="#" className="read-more">read more +</a>
                                    <div className="icon"><span className=""><FaCarBattery /></span></div>
                                </div>
                            </div>
                            <div className="col-lg-4 service-block-one">
                                <div className="inner-box hvr-float-shadow">
                                    <h5>OPEN FOR ALL</h5>
                                    <h2>New Order</h2>
                                    <a href="#" className="read-more">read more +</a>
                                    <div className="icon"><span className=""><FaTachometerAlt /></span></div>
                                </div>
                            </div>
                            <div className="col-lg-4 service-block-one">
                                <div className="inner-box hvr-float-shadow">
                                    <h5>Service and Repairs</h5>
                                    <h2>Tyre & Wheels</h2>
                                    <a href="#" className="read-more">read more +</a>
                                    <div className="icon"><span className=""><FaCogs /></span></div>
                                </div>
                            </div>
                            <div className="col-lg-4 service-block-one">
                                <div className="inner-box hvr-float-shadow">
                                    <h5>Service and Repairs</h5>
                                    <h2>Denting</h2>
                                    <a href="#" className="read-more">read more +</a>
                                    <div className="icon"><span className=""><FaCogs /></span></div>
                                </div>
                            </div>
                            <div className="col-lg-4 service-block-one">
                                <div className="inner-box hvr-float-shadow">
                                    <h5>Service and Repairs</h5>
                                    <h2>Painting</h2>
                                    <a href="#" className="read-more">read more +</a>
                                    <div className="icon"><span className=""><FaCogs /></span></div>
                                </div>
                            </div>
                            <div className="col-lg-4 service-block-one">
                                <div className="inner-box hvr-float-shadow">
                                    <h5>Service and Repairs</h5>
                                    <h2>Painting</h2>
                                    <a href="#" className="read-more">read more +</a>
                                    <div className="icon"><span className=""><FaCogs /></span></div>
                                </div>
                            </div>
                            <div className="col-lg-4 service-block-one">
                                <div className="inner-box hvr-float-shadow">
                                    <h5>Service and Repairs</h5>
                                    <h2>Painting</h2>
                                    <a href="#" className="read-more">read more +</a>
                                    <div className="icon"><span className=""><FaCogs /></span></div>
                                </div>
                            </div>
                            <div className="col-lg-4 service-block-one">
                                <div className="inner-box hvr-float-shadow">
                                    <h5>Service and Repairs</h5>
                                    <h2>Painting</h2>
                                    <a href="#" className="read-more">read more +</a>
                                    <div className="icon"><span className=""><FaCogs /></span></div>
                                </div>
                            </div>
                            {/* Additional service blocks go here */}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AdminDashbord;
