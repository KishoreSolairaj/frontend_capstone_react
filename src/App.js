import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from './components/LandingPage/Components/Layout/Layout';
import AOS from 'aos';
import { BookAppointments, GiveReviews, Home, Login, Profile, Reports, Reviews, SignUp } from './components';
import HealthTips from './components/HeathTips/HealthTips';
import Setauthtoken from './Setauthtoken';
import InstantConsultation from './components/InstantConsultation/InstantConsultation';

function App() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 3000,
    })
  }, [])
  return (
    <div className="App">
        <Router>
          <Layout>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/reviews" element={<Reviews />}/>
                <Route path="/healthblog" element={<HealthTips />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/search/doctors" element={<BookAppointments />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/instant-consultation" element={<InstantConsultation />} />

                <Route
                  path="/setauthtoken/:authtoken"
                  element={<Setauthtoken />}
                />
              </Routes>
          </Layout>
        </Router>
    </div>
  );
}

export default App;
