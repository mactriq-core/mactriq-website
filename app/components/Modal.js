import React from 'react';

const Modal = ({ isOpen, onClose }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
      };

  return (
    <div className={`fixed inset-0 bg-gray-500 bg-opacity-50 ${isOpen ? '' : 'hidden'} flex items-center justify-center`}>
    <div className="bg-white border-[#15BFFD] border p-4 rounded shadow-md w-96">
      <p className="text-xl text-[#080B2A] font-bold mb-10">Contact Form</p>
      <form onSubmit={handleSubmit} >
        <div className="mb-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input type="text" id="name" name="name" className="mt-1 p-2 border rounded-md w-full" required />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input type="email" id="email" name="email" className="mt-1 p-2 border rounded-md w-full" required />
        </div>
        <div className="mb-2">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Subject
          </label>
          <input type="text" id="subject" name="subject" className="mt-1 p-2 border rounded-md w-full" required />
        </div>
        <div className="mb-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea id="message" name="message" rows="3" className="mt-1 p-2 border rounded-md w-full" required></textarea>
        </div>
        <div className="flex justify-end">
          <button type="button" onClick={onClose} className="mr-2 bg-[#2A3E84] text-white px-3 py-2 rounded-full">
            Close
          </button>
          <button type="submit" className="bg-[#15BFFD] text-white px-3 py-2 rounded-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Modal;