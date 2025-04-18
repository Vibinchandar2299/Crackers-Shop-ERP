import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const generateRandomData = () => {
  const names = ['Aarav Raj', 'Ishaan Kumar', 'Maya Ramesh', 'Priya Suresh', 'Ananya Venkatesan'];
  const streets = ['Anna Nagar', 'T. Nagar', 'Adyar', 'Mylapore', 'Velachery'];
  const cities = ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem'];
  const zipCodes = ['600001', '641001', '625001', '620001', '636001'];

  const name = names[Math.floor(Math.random() * names.length)];
  const street = streets[Math.floor(Math.random() * streets.length)];
  const city = cities[Math.floor(Math.random() * cities.length)];
  const zip = zipCodes[Math.floor(Math.random() * zipCodes.length)];

  return {
    name,
    email: `${name.toLowerCase().replace(' ', '')}@gmail.com`,
    phone: `+91 98${Math.floor(Math.random() * 10000000)}`,
    address: `${Math.floor(Math.random() * 1000)} ${street}, ${city}, Tamil Nadu, ${zip}`
  };
};

const sampleProducts = [
  { name: 'Sparkler', quantity: 2, price: 30 },
  { name: 'Flower Pot', quantity: 1, price: 50 },
  { name: 'Rocket', quantity: 3, price: 70 },
];

const CustomerPage = () => {
  const [customers, setCustomers] = useState(Array(30).fill().map((_, i) => ({ id: i + 1, ...generateRandomData() })));
  const [showAddCustomerModal, setShowAddCustomerModal] = useState(false);
  const [showBillingModal, setShowBillingModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [searchCustomer, setSearchCustomer] = useState('');

  const [newCustomer, setNewCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleAddCustomer = () => {
    if (newCustomer.name && newCustomer.email && newCustomer.phone && newCustomer.address) {
      const newCustomerData = {
        id: customers.length + 1,
        ...newCustomer
      };
      setCustomers([...customers, newCustomerData]);
      setNewCustomer({
        name: '',
        email: '',
        phone: '',
        address: ''
      });
      setShowAddCustomerModal(false);
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleBilling = (id) => {
    const customer = customers.find(c => c.id === id);
    setSelectedCustomer(customer);
    setShowBillingModal(true);
  };

  const handlePrint = () => {
    const element = document.getElementById('invoiceContent');
    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`invoice_${selectedCustomer?.name}.pdf`);
    });
  };

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchCustomer.toLowerCase())
  );

  return (
    <div className="flex bg-[#e6f0fa] min-h-screen">
      <Sidebar />
      <div className="main-content flex-1 overflow-auto p-6 ml-64 bg-white rounded-lg shadow-md">
        <div className="bg-[#cce6ff] p-4 rounded-xl shadow-sm mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900">Vibin Crackers</h1>
        </div>

        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search customer..."
            value={searchCustomer}
            onChange={(e) => setSearchCustomer(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-md shadow-sm"
          />
          <button
            onClick={() => setShowAddCustomerModal(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 ml-4"
          >
            Add Customer
          </button>
        </div>

        <div className="customer-details grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredCustomers.map(customer => (
            <div key={customer.id} className="customer-box bg-blue-50 border rounded-lg p-4 shadow-md">
              <div>
                <h2 className="font-bold text-lg text-blue-800">{customer.name}</h2>
                <p><strong>Email:</strong> {customer.email}</p>
                <p><strong>Phone:</strong> {customer.phone}</p>
                <p><strong>Address:</strong> {customer.address}</p>
              </div>
              <button
                onClick={() => handleBilling(customer.id)}
                className="bg-blue-600 text-white px-6 py-2 rounded-md mt-4 hover:bg-blue-700 self-end"
              >
                Billing
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Add Customer Modal */}
      {showAddCustomerModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full overflow-hidden animate-fade-in">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-semibold">Add New Customer</h2>
              <button onClick={() => setShowAddCustomerModal(false)} className="text-gray-500 hover:text-red-500">✕</button>
            </div>

            <div className="p-4">
              <input
                type="text"
                placeholder="Name"
                value={newCustomer.name}
                onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
                className="w-full p-3 border mb-3 rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                value={newCustomer.email}
                onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
                className="w-full p-3 border mb-3 rounded-md"
              />
              <input
                type="text"
                placeholder="Phone"
                value={newCustomer.phone}
                onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
                className="w-full p-3 border mb-3 rounded-md"
              />
              <textarea
                placeholder="Address"
                value={newCustomer.address}
                onChange={(e) => setNewCustomer({ ...newCustomer, address: e.target.value })}
                className="w-full p-3 border mb-4 rounded-md"
              />

              <button
                onClick={handleAddCustomer}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 w-full"
              >
                Add Customer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Billing Modal */}
      {showBillingModal && selectedCustomer && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full overflow-hidden animate-fade-in">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-semibold">Invoice - {selectedCustomer.name}</h2>
              <button onClick={() => setShowBillingModal(false)} className="text-gray-500 hover:text-red-500">✕</button>
            </div>

            <div className="p-4" id="invoiceContent">
              <h3 className="text-xl font-bold text-center mb-2">Vibin Crackers</h3>
              <p className="text-sm text-center mb-2">{new Date().toLocaleString()}</p>
              <p className="text-sm text-center mb-4">
                123 Firework Street, Sivakasi, Tamil Nadu - 626123<br />
                Phone: +91 9876543210
              </p>

              <ul className="space-y-3">
                {sampleProducts.map((product, idx) => (
                  <li key={idx} className="flex justify-between border p-2 rounded shadow-sm">
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-600">Qty: {product.quantity}</p>
                    </div>
                    <div>
                      <p className="font-bold">₹{product.quantity * product.price}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 text-right">
                <button
                  onClick={handlePrint}
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                >
                  Download Invoice
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerPage;
