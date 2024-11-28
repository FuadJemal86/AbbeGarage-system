import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../AbeGarageCustomTemplate/assets/css/style.css';
import '../../AbeGarageCustomTemplate/assets/css/responsive.css';
import '../../AbeGarageCustomTemplate/assets/css/color.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ScaleLoader from "react-spinners/ScaleLoader";

function LoginBody() {
    const navigate = useNavigate();
    const [Error, SetError] = useState('');
    const [loading, setLoading] = useState(false); // Loader state
    const [Value, SetValue] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true); 


        axios.post('http://localhost:3032/auth/login', Value)
            .then(result => {
                setLoading(false); // Stop loading
                if (result.data.loginStates && result.data.token) {
                    localStorage.setItem('token',result.data.token)
                    navigate('/dashboard');
                } else {
                    SetError(result.data.Error);
                }
            })
            .catch(err => {
                setLoading(false); // Stop loading
                console.log(err);
            });
    };


    return (
        <section className="contact-section">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="form-column col-lg-7">
                        <div className="inner-column">
                            <div className="contact-form">
                                <form method="post" action="sendemail.php" id="contact-form" onSubmit={handleSubmit}>
                                    <div className="row clearfix">
                                        <div className="sec-title style-two fs-2 loginn fw-bold">Login to Your Account</div>

                                        <div className="form-group col-md-12">
                                            <div className="text-danger">{Error}</div>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Your Email"
                                                required
                                                onChange={(e) => SetValue({ ...Value, email: e.target.value })}
                                            />
                                        </div>

                                        <div className="form-group col-md-12">
                                            <input
                                                type="password"
                                                name="password"
                                                placeholder="Your Password"
                                                required
                                                onChange={(e) => SetValue({ ...Value, password: e.target.value })}
                                            />
                                        </div>

                                        <div className="form-group col-md-12">
                                            {loading ? (
                                                <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                                                    <ScaleLoader color="#36d7b7" height={50} width={8} radius={4} margin={2} />
                                                </div>
                                            ) : (
                                                <button
                                                    className="theme-btn btn-style-one"
                                                    type="submit"
                                                    data-loading-text="Please wait..."
                                                >
                                                    <span>Login</span>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginBody;
