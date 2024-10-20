import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import {
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaMobileAlt,
  FaBullhorn,
  FaHeadset,
} from "react-icons/fa";

import GetStarted_Modals from "../Modal/GetStarted_Modals";
import Modal from "../Modal/Modal";

const FeatureCard = ({ icon, title, description, onClick }) => (
  <div
    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center cursor-pointer"
    onClick={onClick}
  >
    <div className="text-blue-500 text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const GetStarted = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [serviceName, setServiceName] = useState('');

  const openModal = (name) => {
    setServiceName(name);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setServiceName('');
  };

  return (
    <>
      <Navbar />
      <section className="bg-gray-100 py-24">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Start Your Journey with Us
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Discover our wide range of services and find the perfect solution to
            meet your needs. Whether you're looking for custom software or
            digital marketing, we're here to help.
          </p>
          <a
            href="#services"
            className="bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
          >
            Explore Our Services
          </a>
        </div>

        <div id="services" className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FaCode />}
              title="Custom Software"
              description="Get tailored software solutions designed to fit your unique requirements and business goals."
              onClick={() => openModal("Custom Software")}
            />
            <FeatureCard
              icon={<FaLaptopCode />}
              title="Web Development"
              description="Build a strong online presence with our cutting-edge web development services."
              onClick={() => openModal("Web Development")}
            />
            <FeatureCard
              icon={<FaRocket />}
              title="Mobile App Development"
              description="Launch your ideas with high-performance mobile applications for all platforms."
              onClick={() => openModal("Mobile App Development")}
            />
            <FeatureCard
              icon={<FaMobileAlt />}
              title="Responsive Design"
              description="Ensure your website looks great on any device with our responsive design solutions."
              onClick={() => openModal("Responsive Design")}
            />
            <FeatureCard
              icon={<FaBullhorn />}
              title="Digital Marketing"
              description="Enhance your brand's visibility and reach with our comprehensive digital marketing strategies."
              onClick={() => openModal("Digital Marketing")}
            />
            <FeatureCard
              icon={<FaHeadset />}
              title="24/7 Support"
              description="Receive top-notch support anytime with our dedicated 24/7 customer service."
              onClick={() => openModal("24/7 Support")}
            />
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Service Request">
        <GetStarted_Modals serviceName={serviceName} onClose={closeModal} />
      </Modal>

      <Footer />
    </>
  );
};

export default GetStarted;