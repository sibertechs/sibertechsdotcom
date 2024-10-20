// src/Components/Modal/Modal.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="relative bg-white rounded-lg shadow-lg w-4/5 md:w-2/3 lg:w-1/2 p-6 max-h-[80vh] overflow-y-auto">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <FaTimes size={24} />
        </button>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
