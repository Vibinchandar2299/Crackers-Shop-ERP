import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const StocksPage = () => {
  const [products, setProducts] = useState(Array.from({ length: 100 }, (_, index) => ({
    sno: index + 1,
    name: `Product ${index + 1}`,
    stock: Math.floor(Math.random() * 1000),
    salesPrice: (Math.random() * 100).toFixed(2),
    totalSales: Math.floor(Math.random() * 100),
    totalRevenue: (Math.random() * 10000).toFixed(2),
    status: 'In Stock',
    isEditing: false,
  })));

  const [searchTerm, setSearchTerm] = useState('');
  const [newProduct, setNewProduct] = useState({
    name: '',
    stock: '',
    salesPrice: '',
    totalSales: '',
    totalRevenue: '',
    status: 'In Stock',
  });

  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddCrackers = () => {
    const newEntry = {
      sno: products.length + 1,
      ...newProduct,
      isEditing: false,
    };
    setProducts([...products, newEntry]);
    setNewProduct({
      name: '',
      stock: '',
      salesPrice: '',
      totalSales: '',
      totalRevenue: '',
      status: 'In Stock',
    });
    setShowAddForm(false);
  };

  const handleEditToggle = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].isEditing = !updatedProducts[index].isEditing;
    setProducts(updatedProducts);
  };

  const handleSave = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].isEditing = false;
    setProducts(updatedProducts);
  };

  const handleInputChange = (index, field, value) => {
    const updatedProducts = [...products];
    updatedProducts[index][field] = value;
    setProducts(updatedProducts);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex bg-[#e6f0fa] min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 ml-64 bg-[#e6f2ff]">
        {/* Header */}
        <div className="bg-[#cce6ff] p-4 rounded-xl shadow-sm mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900">Vibin Crackers</h1>
        </div>

        {/* Search and Add */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <input
            type="text"
            placeholder="Search Products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow border border-blue-300 rounded px-4 py-2 bg-white shadow-sm"
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 shadow"
            onClick={() => setShowAddForm(!showAddForm)}
          >
            {showAddForm ? 'Cancel' : 'Add Crackers'}
          </button>
        </div>

        {/* Add Product Form */}
        {showAddForm && (
          <div className="bg-white border border-blue-200 shadow-md rounded p-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {['name', 'stock', 'salesPrice', 'totalSales', 'totalRevenue'].map((field) => (
                <input
                  key={field}
                  type={field.includes('Price') || field.includes('Revenue') ? 'number' : 'text'}
                  placeholder={field.replace(/([A-Z])/g, ' $1')}
                  value={newProduct[field]}
                  onChange={(e) => setNewProduct({ ...newProduct, [field]: e.target.value })}
                  className="border border-blue-300 px-3 py-2 rounded bg-white"
                />
              ))}
              <select
                value={newProduct.status}
                onChange={(e) => setNewProduct({ ...newProduct, status: e.target.value })}
                className="border border-blue-300 px-3 py-2 rounded bg-white"
              >
                <option value="In Stock">In Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>
            <button
              onClick={handleAddCrackers}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 shadow"
            >
              Add
            </button>
          </div>
        )}

        {/* Product Table */}
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full bg-white border border-blue-200">
            <thead>
              <tr className="bg-[#cce6ff] text-blue-900">
                {['S.No', 'Name', 'Stock', 'Sales Price', 'Total Sales', 'Total Revenue', 'Status', 'Update'].map(
                  (title) => (
                    <th key={title} className="px-4 py-2 border border-blue-100">
                      {title}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, index) => (
                <tr key={product.sno} className="hover:bg-blue-50">
                  <td className="px-4 py-2 border border-blue-100">{product.sno}</td>
                  {['name', 'stock', 'salesPrice', 'totalSales', 'totalRevenue', 'status'].map((field) => (
                    <td key={field} className="px-4 py-2 border border-blue-100">
                      {product.isEditing ? (
                        field === 'status' ? (
                          <select
                            value={product.status}
                            onChange={(e) => handleInputChange(index, field, e.target.value)}
                            className="border px-2 py-1 rounded w-full"
                          >
                            <option value="In Stock">In Stock</option>
                            <option value="Out of Stock">Out of Stock</option>
                          </select>
                        ) : (
                          <input
                            value={product[field]}
                            onChange={(e) => handleInputChange(index, field, e.target.value)}
                            className="border px-2 py-1 rounded w-full"
                          />
                        )
                      ) : (
                        product[field]
                      )}
                    </td>
                  ))}
                  <td className="px-4 py-2 border border-blue-100">
                    {product.isEditing ? (
                      <button
                        onClick={() => handleSave(index)}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 shadow"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEditToggle(index)}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 shadow"
                      >
                        Update
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StocksPage;
