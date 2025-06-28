'use client';

import { motion } from 'framer-motion';
import { AcademicCapIcon } from '@heroicons/react/24/outline';
const certifications = [
  {
    name: 'Simplilearn SkillUp – Full Stack Development 101',
    issuer: 'Simplilearn Education',
    date: '2025',
    credentialId: 'AGinsxwhsieovnoaev',
  },
  {
    name: 'Skyscanner – Front-End Software Engineering Job Simulation',
    issuer: 'Forage ',
    date: '2025',
    credentialId: 'AEx4z2B5KxfkBxyi5',
  },
  {
    name: "City of Moreton Bay – Web Development Job Simulation",
    issuer: "Forage",
    date: '2025',
    credentialId: "LRpDMhsEAhvfYXD8x",
  },
  {
    name: "Accenture UK – Developer and Technology Job Simulation",
    issuer: "Forage ",
    date: '2025',
    credentialId: "ZqcwGc6wtMmH8keZg",
  },
  {
    name: "Tata Group - GenAI Powered Data Analytics Job Simulation",
    issuer: "TATA SKill Builder",
    date: '2025',
    credentialId: "4Y3Mp2EZoz9zSRmu5",
  },
];


export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications demonstrating expertise in cloud and security
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500">
                  <AcademicCapIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {cert.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Issued: {cert.date}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Credential ID: {cert.credentialId}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
