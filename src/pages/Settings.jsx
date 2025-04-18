import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import profileImg from '../assets/images/Company Logo.png';

const SettingsPage = () => {
  const [profile, setProfile] = useState({
    name: 'Vibin',
    email: 'Vibin@example.com',
    phone: '123-456-7890',
    company: 'Cracker Shop',
    address: '123 Cracker Lane, Bakery City',
    adminId: 'Admin id: 677e9360b12a5e0a21275998',
    profilePhoto: profileImg,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editCompany, setEditCompany] = useState(false);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    console.log('Profile Updated:', profile);
  };

  const handleEditCompany = () => {
    setEditCompany(!editCompany);
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleCompanyChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const sampleInvoice = {
    invoiceNo: 'CRK-INV-20250418',
    date: '2025-04-18',
    customerName: 'Anita Krishnan',
    items: [
      { product: 'Butter Masala Crackers', quantity: 10, price: 15, total: 150 },
      { product: 'Spicy Crunch Crackers', quantity: 5, price: 18, total: 90 },
      { product: 'Classic Salted Crackers', quantity: 8, price: 10, total: 80 },
      { product: 'Onion Rings Crackers', quantity: 4, price: 20, total: 80 },
    ],
    totalAmount: 400,
  };

  return (
    <div className="flex min-h-screen bg-[#e6f0fa]">
      <div className="w-64 bg-gray-800 text-white">
        <Sidebar />
      </div>

      <div className="flex-1 p-6 bg-[#e6f0fa]">
        <div className="bg-[#cce6ff] p-6 rounded-lg shadow-lg mb-6">
          <div className="header p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-600">Vibin Crackers</h1>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex">
            <div className="w-1/3 pr-6">
              <div className="flex flex-col items-center">
                <img
                  src={profile.profilePhoto}
                  alt="Profile"
                  className="w-32 h-32 rounded-full mb-2"
                />
                <h3 className="text-lg font-semibold text-gray-700">{profile.name}</h3>
                <p className="text-gray-500">{profile.adminId}</p>
              </div>

              {isEditing ? (
                <div className="space-y-4 mt-6">
                  <div>
                    <label className="block text-gray-600">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={profile.phone}
                      onChange={handleProfileChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={profile.address}
                      onChange={handleProfileChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleProfileChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                    />
                  </div>
                  <div className="text-right">
                    <button
                      onClick={handleSaveProfile}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                    >
                      Save
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-2 text-gray-700 mt-6">
                  <p><strong>Phone:</strong> {profile.phone}</p>
                  <p><strong>Address:</strong> {profile.address}</p>
                  <p><strong>Email:</strong> {profile.email}</p>
                  <div className="flex justify-start mt-4 space-x-2">
                    <button
                      onClick={handleEditProfile}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mr-2"
                    >
                      Edit Profile
                    </button>
                    <button
                      onClick={handleEditCompany}
                      className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded"
                    >
                      Edit Company Details
                    </button>
                  </div>
                </div>
              )}

              {editCompany && (
                <div className="mt-4">
                  <div>
                    <label className="block text-gray-600">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={profile.company}
                      onChange={handleCompanyChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 mt-2">Company Address</label>
                    <input
                      type="text"
                      name="address"
                      value={profile.address}
                      onChange={handleCompanyChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="w-2/3">
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">Send WhatsApp Message</h2>
                <h6>Enter your message below or upload a file to send it through WhatsApp</h6>
                <textarea
                  rows="4"
                  className="w-full bg-[#d0e7ff] border border-gray-300 rounded p-3 mb-4"
                  placeholder="Type your message here"
                ></textarea>
                <div className="flex justify-end">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mr-2">
                    Upload
                  </button>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Invoice - Vibin Crackers</h2>

            <p><strong>Invoice No:</strong> {sampleInvoice.invoiceNo}</p>
            <p><strong>Date:</strong> {sampleInvoice.date}</p>
            <p><strong>Customer Name:</strong> {sampleInvoice.customerName}</p>

            <table className="w-full mt-4 border border-gray-300 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#cce6ff]">
                  <th className="border px-2 py-1 text-bold">Product</th>
                  <th className="border px-2 py-1 text-bold">Quantity</th>
                  <th className="border px-2 py-1 text-bold">Price</th>
                  <th className="border px-2 py-1 text-bold">Total</th>
                </tr>
              </thead>
              <tbody>
                {sampleInvoice.items.map((item, index) => (
                  <tr key={index} className="hover:bg-[#f0f9ff]">
                    <td className="border px-2 py-1">{item.product}</td>
                    <td className="border px-2 py-1">{item.quantity}</td>
                    <td className="border px-2 py-1">₹{item.price}</td>
                    <td className="border px-2 py-1">₹{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="text-right mt-4">
              <strong>Total: ₹{sampleInvoice.totalAmount}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
