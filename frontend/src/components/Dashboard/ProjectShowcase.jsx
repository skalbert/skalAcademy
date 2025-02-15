import { motion } from 'framer-motion';

const projects = Array.from({ length: 20 }, (_, i) => ({
  title: `Project ${i + 1}`,
  description: `Description for Project ${i + 1}. This project showcases unique features and functionalities.`,
  link: '#',
  image: 'https://via.placeholder.com/150'
}));

const ProjectShowcase = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <motion.h1
        className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Project Showcase
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-4 hover:shadow-xl transition duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-t-2xl" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-300"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
