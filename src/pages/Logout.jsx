import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear any session or local storage
    localStorage.clear();
    sessionStorage.clear();

    // Simulate delay if needed, then redirect to login
    const timer = setTimeout(() => {
      navigate('/login');
    }, 1000); // optional delay (1 second)

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-700">Logging out...</h2>
        <p className="text-gray-500 mt-2">Please wait while we redirect you to the login page.</p>
      </div>
    </div>
  );
};

export default Logout;
