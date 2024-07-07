import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description, bgColor }) => {
  return (
    <motion.div
      className={`flex flex-col items-center justify-center text-center p-6 m-4 rounded-lg shadow-lg transition transform hover:scale-105 ${bgColor}`}
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-4xl mb-4">
        {icon}
      </div>
      <h3 className="font-Montserrat text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-800 font-Montserrat">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
