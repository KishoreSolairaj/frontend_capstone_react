import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [role, setRole] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  let loginRoleText = '';
  if (!!role && role === "doctor")
    loginRoleText = 'Login as a Doctor';
  else if (!!role && role === "patient")
    loginRoleText = 'Login as a Patient';

  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("auth-token")) {
      navigate("/")
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};

    // Username validation
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
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const login = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        password: password,
      }),
    });

    const json = await res.json();
    if (json.authtoken) {
      sessionStorage.setItem('auth-token', json.authtoken);
      sessionStorage.setItem('name', name);
      sessionStorage.setItem('phone', phone);
      sessionStorage.setItem('email', email);
      // Redirect to home page
      navigate('/');
      window.location.reload()
    }
    else {
      if (json.errors) {
        for (const error of json.errors) {
          console.error(error.msg);
        }
      }
      else {
        console.error(json.error);
      }
    }
  };

  return (
    <div>
      <div className="container">
        <div className="login-grid">
          <div className="login-text">
            <h2>Login</h2>
          </div>
          <div className="login-text">
            Are you New Member? <span ><Link to="/signup" style={{ color: '#2190FF' }}> Signup Here</Link></span>
          </div>
          <div className="login-form">
            <form onSubmit={login}>
              <div className="form-group">
                <label htmlFor="username">UserName</label>
                <input value={name} type="text" onChange={(e) => setName(e.target.value)} name="name" id="username" className="form-control" placeholder="Enter your username" aria-describedby="helpId" />
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
                <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button>
                <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
              </div>
              <div className="login-text">
                Forget Password <span ><Link to="/signup" style={{ color: '#2190FF' }}> Signup Here</Link></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login