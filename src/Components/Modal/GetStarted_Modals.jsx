import React, { useState } from "react";

const GetStarted_Modals = ({ serviceName, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    request: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form data submitted:', formData);
    onClose(); // Close the modal after submission
  };

  return (
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-4">Request {serviceName}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="request" className="block text-gray-700">Your Request</label>
          <textarea
            id="request"
            name="request"
            value={formData.request}
            onChange={handleChange}
            rows="4"
            required
            className="w-full px-4 py-2 border rounded-md"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default GetStarted_Modals;
