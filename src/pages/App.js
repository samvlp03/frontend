import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import ProtectedRoute from '../components/ProtectedRoute';
import {
  Home,
  Exercise,
  Login,
  About,
  Contact,
  Welcome
} from '.';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Welcome />} />
          
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/exercise" element={<Exercise />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
