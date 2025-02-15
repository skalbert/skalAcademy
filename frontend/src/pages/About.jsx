import { useState } from 'react';
import { motion } from 'framer-motion';

const initialMembers = [
  { name: 'Skalbert Rina', role: 'Founder & CEO', contact: 'skbrinae@gmail.com' },
  { name: 'Banylla Nongsiej', role: 'CTO', contact: 'banyllanongsiej2014@gmail.com' },
  { name: 'Iadonlang Nongrang', role: 'Project Manager', contact: 'iadonnongrang@gmail.com' },
];

const AboutUs = () => {
  const [members, setMembers] = useState(initialMembers);

  const addMember = () => {
    const name = prompt('Enter member name:');
    const role = prompt('Enter member role:');
    const contact = prompt('Enter member contact:');
    if (name && role && contact) {
      setMembers([...members, { name, role, contact }]);
    }
  };

  return (
    <div className="min-h-screen p-6">
      <motion.h1
        className="text-4xl font-bold text-center mb-8 mt-14"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Us
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <motion.div
            key={index}
            className="bg-teal-500 shadow-md rounded-2xl p-6 text-center
             hover:shadow-xl transition duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-gray-200 mb-2">{member.name}</h2>
            <p className=" mb-1 text-gray-200">{member.role}</p>
            <p className="text-gray-100">{member.contact}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <motion.button
          onClick={addMember}
          className="px-6 py-3 bg-blue-500 text-white rounded-2xl shadow-md hover:bg-blue-600 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Add Member
        </motion.button>
      </div>

      <motion.footer
        className="mt-12 bg-gray-800 text-white text-center p-4 rounded-t-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p>&copy; 2025 skal.io. All rights reserved.</p>
        <p>Contact us: info@skal.io | +917005746503</p>
      </motion.footer>
    </div>
  );
};

export default AboutUs;