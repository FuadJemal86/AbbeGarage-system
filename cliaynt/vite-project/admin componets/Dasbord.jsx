import React, { useEffect } from 'react';
import '../../vite-project/css/AddCustomer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/AddCustomer.css'
import Footer from '../home componets/Footer';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import logo2 from '../../AbeGarageCustomTemplate/assets/images/logo-two.png'
import logo from '../../AbeGarageCustomTemplate/assets/images/logo.png'
import '../../AbeGarageCustomTemplate/assets/css/style.css';
import '../../AbeGarageCustomTemplate/assets/css/responsive.css';
import '../../AbeGarageCustomTemplate/assets/css/color.css';
import iconBar from '../../AbeGarageCustomTemplate/assets/images/icons/icon-bar.png';
import { useState } from 'react';
import { faGauge, faCartPlus, faCartArrowDown, faUserPlus, faUser, faRecycle, faUserGroup, faEllipsisVertical, faRightFromBracket,faPlus } from '@fortawesome/free-solid-svg-icons';
import logoImg from '../../AbeGarageCustomTemplate/assets/images/custom/logo.png';
import useVaildation from '../src/Hooks/validation';
import api from '../src/API';



function Dasbord() {
    useVaildation()
    const [adminInfo,setAdminInfo] = useState([])
    
    const [IsOpen, SetOpen] = useState(false)
    const togel = () => {
        SetOpen(!IsOpen)
    }
    const logout = () => {
        localStorage.removeItem('token')
        SetOpen(false)
        window.location.href = '/login';
    }
    const setcoth = () => {
        SetOpen(false)
    }

    useEffect(()=> {
        api.get('/auth/get-admin')
        .then(result => {
            if(result.data.Status) {
                const data = result.data.Admin;

                setAdminInfo({
                    name:data.name,
                    email:data.admin_email,
                    image:data.image

                })

            }
        })
    },[])
    
    return (
        <div className='customer-add'>
            <header className='head'>
                <div className='d-flex pro-image'>
                    <div className='logo-image'>
                        <img src={logoImg} alt="Company Logo" />
                    </div>
                    <div className='profile-photo d-flex'>
                        <div className='profile'><img src={`http://localhost:3032/Image/${adminInfo.image}`} alt="profile" /></div>
                        <div onClick={togel} className='elibses-icon'><FontAwesomeIcon icon={faEllipsisVertical} /></div>
                    </div>
                </div>
                {IsOpen && (
                    <div className="logout-con open-logout ">
                        <div className='p-1'>
                            <div className='d-flex dede'>
                                <div><FontAwesomeIcon icon={faPlus} /></div>
                                <Link to={'add-account'} onClick={setcoth}  className='add-account'>Add Account</Link>
                            </div>
                            <div className='d-flex'>
                                <div className='logout-icone'><FontAwesomeIcon icon={faRightFromBracket} /></div>
                                <div onClick={logout}  className='logot'>Logout</div>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            <div className="admin-dashboard">
                <nav className="sidebar d-none d-xl-block admin-dash">
                    <h2 className="admin-menu mb-3">Admin Menu</h2>
                    <ul className="menu-list">
                        <Link to={'admin-dashboard'}> <div className='d-flex dash-icon'>
                            <div ><FontAwesomeIcon icon={faGauge} /></div>
                            <div>Overviwer</div>
                        </div> </Link>
                        <hr />
                        <Link to={'status'}><div className='d-flex dash-icon'>
                            <div><FontAwesomeIcon icon={faCartArrowDown} /></div>
                            <div>Orders</div></div></Link>
                        <hr />
                        <Link to={'vihicke'} > <div className='d-flex dash-icon'>
                            <div><FontAwesomeIcon icon={faCartPlus} /></div>
                            <div>New order</div></div></Link>
                        <hr />
                        <Link to={'add-employee'}><div className='d-flex dash-icon'>
                            <div><FontAwesomeIcon icon={faUserPlus} /></div>
                            <div>Add employee</div></div></Link>
                        <hr />
                        <Link to={'employe-edit'}><div className='d-flex dash-icon'>
                            <div><FontAwesomeIcon icon={faUserGroup} /></div>
                            <div>Employees</div></div></Link>
                        <hr />
                        <Link to={'add-new-customer'}><div className='d-flex dash-icon'><div>
                            <FontAwesomeIcon icon={faUserPlus} /></div>
                            <div>Add customer</div></div></Link>
                        <hr />
                        <Link to={'Customers'}><div className='d-flex dash-icon'>
                            <div><FontAwesomeIcon icon={faUser} /></div>
                            <div>Customers</div></div></Link>
                        <hr />
                        <Link to={'add-services'}><div className='d-flex dash-icon'>
                            <div><FontAwesomeIcon icon={faRecycle} /></div>
                            <div>Services</div></div></Link>
                    </ul>
                </nav>
                <div className="main-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Dasbord