import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from '../pages/Dahboard';
import Stocks from '../pages/Stocks';
import Customer from '../pages/Customer';
import History from '../pages/History';
import Gift from '../pages/Gift';
import Settings from '../pages/Settings';
import Login from '../pages/Login';
import Logout from '../pages/Logout';

const AppRoutes = () => {
  const isAuthenticated = localStorage.getItem('isLoggedIn'); // Example auth check

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />

      {/* Protected Routes */}
      {isAuthenticated ? (
        <>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/history" element={<History />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/settings" element={<Settings />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
    </Routes>
  );
};

export default AppRoutes;
