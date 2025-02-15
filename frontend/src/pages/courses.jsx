import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Monitor, FileText, Image, Layout, PenTool, Globe, Code, Smartphone, Brain, Terminal, Layers } from 'lucide-react';

// Card Components
const Card = ({ children, className }) => (
  <div className={`border rounded-2xl p-4 shadow-md hover:shadow-xl transition duration-300 bg-white dark:bg-gray-800 ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const courses = [
  {
    category: 'Fundamental of Computer',
    name: 'Computer Fundamentals',
    concepts: 'Basic hardware and software, operating systems, file management.',
    platforms: 'Udemy, Coursera, edX',
    icon: <Monitor className="h-8 w-8 text-indigo-500" />,
  },
  {
    category: 'MS Office',
    name: 'Microsoft Office Essentials',
    concepts: 'Word, Excel, PowerPoint, Outlook basics.',
    platforms: 'Udemy, LinkedIn Learning, Coursera',
    icon: <FileText className="h-8 w-8 text-indigo-500" />,
  },
  {
    category: 'Photoshop',
    name: 'Adobe Photoshop for Beginners',
    concepts: 'Basic photo editing, layers, filters, and tools.',
    platforms: 'Udemy, LinkedIn Learning, Coursera',
    icon: <Image className="h-8 w-8 text-indigo-500" />,
  },
  {
    category: 'Pagemaker',
    name: 'Adobe PageMaker Basics',
    concepts: 'Desktop publishing, layout design, text formatting.',
    platforms: 'Udemy, Skillshare',
    icon: <Layout className="h-8 w-8 text-indigo-500" />,
  },
  {
    category: 'Corel Draw',
    name: 'CorelDRAW Essentials',
    concepts: 'Vector graphic design, logo creation, illustration.',
    platforms: 'Udemy, LinkedIn Learning, Corel official site',
    icon: <PenTool className="h-8 w-8 text-indigo-500" />,
  },
  {
    category: 'Web Designing',
    name: 'Web Design for Beginners',
    concepts: 'HTML, CSS, responsive design, UI/UX principles.',
    platforms: 'Coursera, edX, Udemy',
    icon: <Globe className="h-8 w-8 text-indigo-500" />,
  },
  {
    category: 'Web Development',
    name: 'Full Stack Web Development',
    concepts: 'Front-end (HTML, CSS, JS), back-end (Node.js, Python), databases.',
    platforms: 'Coursera, Udacity, FreeCodeCamp',
    icon: <Code className="h-8 w-8 text-indigo-500" />,
  },
  {
    category: 'App Development',
    name: 'Mobile App Development',
    concepts: 'Android (Java/Kotlin), iOS (Swift), cross-platform (Flutter).',
    platforms: 'Coursera, Udacity, Udemy',
    icon: <Smartphone className="h-8 w-8 text-indigo-500" />,
  },
  {
    category: 'Artificial Intelligence (AI)',
    name: 'Artificial Intelligence',
    concepts: 'Machine learning, neural networks, AI ethics.',
    platforms: 'Coursera, Udacity, edX',
    icon: <Brain className="h-8 w-8 text-indigo-500" />,
  },
  {
    category: 'Programming',
    name: 'Introduction to Programming',
    concepts: 'Basic programming concepts using Python, Java, or C++.',
    platforms: 'Coursera, Udacity, Codecademy',
    icon: <Terminal className="h-8 w-8 text-indigo-500" />,
  },
  {
    category: 'Programming',
    name: 'Advanced Programming',
    concepts: 'Data structures, algorithms, object-oriented programming.',
    platforms: 'Coursera, edX, Udemy',
    icon: <Layers className="h-8 w-8 text-indigo-500" />,
  },
];

const Course = () => {
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Our Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="transition-transform duration-300"
          >
            <Link to={`/courses/${course.name.replace(/\s+/g, '-').toLowerCase()}`}>
              <Card>
                <CardContent>
                  <div className="flex items-center gap-3">
                    {course.icon}
                    <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">{course.category}</h2>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mt-2">{course.name}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">{course.concepts}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Available on: {course.platforms}</p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Course;
