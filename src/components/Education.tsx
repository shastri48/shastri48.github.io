"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Book } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech',
      field: 'Computer Science and Engineering',
      institution: 'K.K COLLEGE OF ENGG & MGMT.',
      period: '2014-2018',
      location: 'India',
      type: 'Bachelor\'s Degree',
      description: 'Focused on computer science fundamentals, software engineering principles, and modern programming practices.'
    },
    {
      degree: 'INTERMEDIATE',
      field: 'MATRICULATION',
      institution: 'SAINIK SCHOOL GOPALGANJ',
      period: '2006-2013',
      location: 'India',
      type: 'Secondary Education',
      description: 'Strong foundation in mathematics, science, and analytical thinking that shaped my problem-solving approach.'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600">Education</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Academic foundation that built my technical expertise and problem-solving skills
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                        <GraduationCap className="text-white" size={24} />
                      </div>
                      <div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          edu.type === 'Bachelor\'s Degree' 
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                            : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                        }`}>
                          {edu.type}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    
                    <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">
                      {edu.field}
                    </h4>

                    <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-300 mb-4">
                      <div className="flex items-center gap-2">
                        <Book size={16} />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline connector */}
              {index < education.length - 1 && (
                <div className="flex justify-center my-8">
                  <div className="w-px h-12 bg-gradient-to-b from-blue-600 to-purple-600"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <GraduationCap size={48} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Beyond formal education, I believe in lifelong learning. I regularly take online courses, 
              attend tech conferences, and stay updated with the latest industry trends and technologies 
              to ensure my skills remain cutting-edge.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
