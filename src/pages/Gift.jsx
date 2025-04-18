import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const GiftBoxPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [giftItems, setGiftItems] = useState(Array(35).fill().map((_, index) => ({
    sno: index + 1,
    name: `Gift Item ${index + 1}`,
    stock: 100,
    price: (Math.random() * 100).toFixed(2),
    quantity: Math.floor(Math.random() * 10) + 1,
  })));

  const [newBox, setNewBox] = useState({
    name: '',
    stock: '',
    price: '',
    quantity: '',
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleInputChange = (e) => {
    setNewBox({ ...newBox, [e.target.name]: e.target.value });
  };

  const handleCreateGiftBox = () => {
    const newGiftBox = {
      sno: giftItems.length + 1,
      name: newBox.name,
      stock: parseInt(newBox.stock),
      price: parseFloat(newBox.price).toFixed(2),
      quantity: parseInt(newBox.quantity),
    };
    setGiftItems([...giftItems, newGiftBox]);
    setNewBox({ name: '', stock: '', price: '', quantity: '' });
  };

  const handleQuantityChange = (index, newQuantity) => {
    const updatedItems = [...giftItems];
    updatedItems[index].quantity = parseInt(newQuantity);
    setGiftItems(updatedItems);
  };

  const filteredGiftItems = giftItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const randomNames = ['Arun', 'Priya', 'Vishal', 'Sneha', 'Ravi', 'Neha', 'Karthik', 'Divya'];

  return (
    <div className="flex bg-[#e6f0fa]">
      <Sidebar />

      <div className="ml-64 p-4 w-full bg-[#e6f2ff]">
        {/* Header */}
        <div className="bg-[#cce6ff] p-4 flex justify-between items-center rounded-xl">
          <h1 className="text-xl font-bold text-blue-800">Vibin Crackers</h1>
        </div>

        <div className="flex gap-6">
          {/* Left: Table */}
          <div className="w-3/4">
            {/* Search */}
            <div className="mb-4 mt-4">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search gift items..."
                className="p-2 w-full border rounded shadow-sm"
              />
            </div>

            {/* Table */}
            <table className="w-full border-collapse bg-white rounded-xl shadow-md">
              <thead>
                <tr className="bg-[#cce6ff]">
                  <th className="border p-2 font-bold">Sno</th>
                  <th className="border p-2 font-bold">Name</th>
                  <th className="border p-2 font-bold">Stock</th>
                  <th className="border p-2 font-bold">Price</th>
                  <th className="border p-2 font-bold">Quantity</th>
                  <th className="border p-2 font-bold">Total</th>
                </tr>
              </thead>
              <tbody>
                {filteredGiftItems.map((item, index) => (
                  <tr key={item.sno} className="hover:bg-[#e6f2ff]">
                    <td className="border p-2">{item.sno}</td>
                    <td className="border p-2">{item.name}</td>
                    <td className="border p-2">{item.stock}</td>
                    <td className="border p-2">₹{item.price}</td>
                    <td className="border p-2">
                      <input
                        type="number"
                        min="0"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(index, e.target.value)}
                        className="w-16 border p-1 rounded text-center"
                      />
                    </td>
                    <td className="border p-2">₹{(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right: Gift Box Input with enhanced design */}
          <div className="w-1/4 bg-gradient-to-b from-blue-100 to-white border rounded-xl shadow-md p-5">
            <h2 className="text-lg font-bold text-blue-800 mb-4">🎁 Create New Gift Box</h2>
            <div className="space-y-3">
              <input
                type="text"
                name="name"
                value={newBox.name}
                onChange={handleInputChange}
                placeholder="🎀 Gift Box Name"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <input
                type="number"
                name="stock"
                value={newBox.stock}
                onChange={handleInputChange}
                placeholder="📦 Stock"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <input
                type="number"
                name="price"
                value={newBox.price}
                onChange={handleInputChange}
                placeholder="💰 Price"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <input
                type="number"
                name="quantity"
                value={newBox.quantity}
                onChange={handleInputChange}
                placeholder="🔢 Quantity"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                onClick={handleCreateGiftBox}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-all"
              >
                ➕ Add Gift Box
              </button>
            </div>
          </div>
        </div>

        {/* Gift Box Sales Report */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">📊 Gift Box Sales Report</h2>
          <table className="w-full border-collapse shadow-sm bg-white rounded-xl">
            <thead>
              <tr className="bg-[#cce6ff]">
                <th className="border p-2 font-bold">Order ID</th>
                <th className="border p-2 font-bold">Customer</th>
                <th className="border p-2 font-bold">Gift Box</th>
                <th className="border p-2 font-bold">Qty</th>
                <th className="border p-2 font-bold">Revenue</th>
                <th className="border p-2 font-bold">Date</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(10)].map((_, i) => {
                const qty = Math.floor(Math.random() * 5) + 1;
                const price = parseFloat((Math.random() * 250 + 50).toFixed(2));
                const name = randomNames[Math.floor(Math.random() * randomNames.length)];
                const date = new Date(Date.now() - i * 86400000).toLocaleDateString();

                return (
                  <tr key={i} className="hover:bg-[#f3f3f3]">
                    <td className="border p-2">ORD-{2000 + i}</td>
                    <td className="border p-2">{name}</td>
                    <td className="border p-2">Box #{i + 1}</td>
                    <td className="border p-2">{qty}</td>
                    <td className="border p-2">₹{(qty * price).toFixed(2)}</td>
                    <td className="border p-2">{date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GiftBoxPage;
