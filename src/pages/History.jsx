import React, { useState } from 'react';
import Sidebar from '../components/Sidebar'; // Assuming Sidebar is in your components folder

// Helper functions for random Tamil names and addresses
const getRandomTamilName = () => {
  const names = [
    "Arun Kumar", "Priya Devi", "Karthik Raja", "Lakshmi S", "Manoj Sundaram", 
    "Anjali Rani", "Vigneshwaran", "Divya Priya", "Surya Narayan", "Nandhini K"
  ];
  return names[Math.floor(Math.random() * names.length)];
};

const getRandomTamilAddress = () => {
  const addresses = [
    "5, Velachery Main Road, Chennai", "34, Adyar Street, Chennai", 
    "2/2, MG Road, Coimbatore", "35, Tidel Park, Chennai", "45, Palani Road, Madurai",
    "12, Kotturpuram, Chennai", "7/8, Anna Nagar East, Chennai", "56, T. Nagar, Chennai",
    "85, Trichy Road, Salem", "9, Pammal Road, Chennai"
  ];
  return addresses[Math.floor(Math.random() * addresses.length)];
};

const HistoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const [historyEntries, setHistoryEntries] = useState(Array(30).fill().map((_, index) => ({
    id: index + 1,
    customerName: getRandomTamilName(),
    phone: `944${Math.floor(Math.random() * 1000000)}`,
    address: getRandomTamilAddress(),
    historyDetails: [
      { date: `2025-04-0${index + 1}`, total: (Math.random() * 1000).toFixed(2), invoice: `INV-${index + 1}` },
      { date: `2025-04-0${index + 2}`, total: (Math.random() * 1000).toFixed(2), invoice: `INV-${index + 2}` },
    ]
  })));


  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredHistory = historyEntries.filter(entry => 
    entry.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="history-page flex">
      {/* Sidebar */}
      <Sidebar />

      <div className="main-content w-full ml-64">
        {/* Header Section */}
        <div className="bg-[#cce6ff] p-4 rounded-xl shadow-sm mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-900">Vibin Crackers</h1>
        </div>

        {/* Search Bar */}
        <div className="search-bar p-4 flex">
          <input 
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="p-2 border border-blue-500 rounded w-full"
            placeholder="Search history..."
          />
        </div>

        {/* History Details Section */}
        <div className="history-details p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredHistory.map(entry => (
            <div key={entry.id} className="history-box border border-blue-200 p-4 rounded-lg shadow-md bg-white">
              <div className="customer-info flex flex-col">
                <h2 className="font-bold text-lg text-blue-800">{entry.customerName}</h2>
                <p><strong>Phone:</strong> {entry.phone}</p>
                <p><strong>Address:</strong> {entry.address}</p>
              </div>
              
              {/* Small Table with Date, Total, and Invoice */}
              <div className="history-table mt-4 overflow-x-auto">
                <table className="w-full table-auto border-collapse">
                  <thead>
                    <tr>
                      <th className="border px-2 py-1 text-blue-800">Date</th>
                      <th className="border px-2 py-1 text-blue-800">Total</th>
                      <th className="border px-2 py-1 text-blue-800">Invoice</th>
                    </tr>
                  </thead>
                  <tbody>
                    {entry.historyDetails.map((detail, index) => (
                      <tr key={index}>
                        <td className="border px-2 py-1">{detail.date}</td>
                        <td className="border px-2 py-1">₹{detail.total}</td> {/* Updated to INR */}
                        <td className="border px-2 py-1">{detail.invoice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .history-page {
          display: flex;
        }
        .main-content {
          flex: 1;
          padding: 20px;
        }
        .header h1 {
          font-size: 24px;
        }
        .search-bar input {
          width: 100%;
        }
        .history-details {
          display: grid;
          grid-template-columns: repeat(3, 1fr); /* Now 3 boxes per row */
          gap: 1rem;
        }
        .history-box {
          border: 1px solid #ddd;
          padding: 1rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          background-color: #eff6ff;

        }
        .history-box table {
          width: 100%;
          margin-top: 1rem;
          border-collapse: collapse;
        }
        .history-box th, .history-box td {
          border: 1px solid #ddd;
          padding: 0.5rem;
          text-align: center;
        }
        .history-box .customer-info {
          margin-bottom: 1rem;
        }
        .history-box .history-table {
          margin-top: 1rem;
          overflow-x: auto;
        }
      `}</style>
    </div>
  );
};

export default HistoryPage;
