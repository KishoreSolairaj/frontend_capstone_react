import React, { useState } from 'react';

import "./SignUp.css";
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const SignUp = () => {
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const updateSignupRoleText = (value) => {
        setRole(value);
    };

    let signupRoleText = '';

    if (role === 'doctor') {
        signupRoleText = 'Signup as a Doctor';
    } else if (role === 'patient') {
        signupRoleText = 'Signup as a Patient';
    }
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};

        // Role validation
        if (!role) {
            newErrors.role = "Please select a role";
        }

        // Name validation
        if (!name.trim()) {
            newErrors.name = "Username is required";
        } else if (name.trim().length < 3) {
            newErrors.name = "Username must be at least 3 characters";
        }

        // Phone validation
        if (!phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^[0-9]{10}$/.test(phone.trim())) {
            newErrors.phone = "Phone number must be 10 digits";
        }

        // Email validation
        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
            newErrors.email = "Invalid email format";
        }

        // Password validation
        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
            newErrors.password = "Password must contain uppercase, lowercase, and number";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const register = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        // API Call
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
                role: role,
            }),
        });
        const json = await response.json();
        if (json.authtoken) {
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            // phone and email
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);
            // Redirect to home page
            navigate("/");
            window.location.reload()
        } else {
            if (json.errors) {
                for (const error of json.errors) {
                    console.error(error.msg);
                }
            } else {
                console.error(json.error);
            }
        }
    };

    return (
        <div className="container" style={{ marginTop: '5%' }}>
            <div className="signup-grid">
                <div className="signup-text">
                    <h1>Signup</h1>
                    {signupRoleText && <div className="signup-role">{signupRoleText}</div>}
                </div>
                <div className="signup-text1">
                    Already a member? <span ><Link to="/login" style={{ color: '#2190FF' }}> Login In</Link></span>
                </div>
                <div className="signup-form">
                    <form method="POST" onSubmit={register}>
                        <div className="form-group">
                            <label htmlFor="role">Signup Role</label>
                            <select name="role" id="role" className="form-control" onChange={(e) => updateSignupRoleText(e.target.value)}>
                                <option value="">Select Role</option>
                                <option value="doctor" onChange={(e) => setName(e.target.value)}>Doctor</option>
                                <option value="patient" onChange={(e) => setName(e.target.value)}>Patient</option>
                            </select>
                            {errors.role && <span style={{ color: 'red', fontSize: '12px' }}>{errors.role}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">UserName</label>
                            <input value={name} type="text" onChange={(e) => setName(e.target.value)} name="name" id="name" className="form-control" placeholder="Enter your name" aria-describedby="helpId" />
                            {errors.name && <span style={{ color: 'red', fontSize: '12px' }}>{errors.name}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" name="phone" id="phone" className="form-control" placeholder="Enter your phone number" aria-describedby="helpId" />
                            {errors.phone && <span style={{ color: 'red', fontSize: '12px' }}>{errors.phone}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                            {errors.email && <span style={{ color: 'red', fontSize: '12px' }}>{errors.email}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type={passwordVisible ? 'text' : 'password'} name="password" id="password" className="form-control" placeholder="Enter your password" aria-describedby="helpId" />
                            <div className="password-visibility" onClick={togglePasswordVisibility}>
                                <i class={passwordVisible ? 'fa fa-eye' : 'fa fa-eye-slash'}></i>
                            </div>
                            {errors.password && <span style={{ color: 'red', fontSize: '12px' }}>{errors.password}</span>}
                        </div>

                        <div className="btn-group">
                            <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                            <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp