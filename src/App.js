import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <Router>
      <div className="font-sans bg-gray-100 min-h-screen">
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
