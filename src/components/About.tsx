"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Zap, Target } from 'lucide-react';

const About = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Express', 'Vue.js', 'Next.js',
    'MongoDB', 'Node.js', 'ROR', 'Git', 'S3 & CloudFront', 'Jenkins', 'REST API Development'
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Full Stack Expertise',
      description: 'Proficient in modern web technologies with 6+ years of hands-on experience'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Led teams of 10+ engineers, driving development of scalable applications'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimized frontend/backend performance, reducing load times significantly'
    },
    {
      icon: Target,
      title: 'Innovation Focus',
      description: 'Passionate about adopting modern technologies and innovative solutions'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate Frontend Lead with extensive experience in building scalable web applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              As a Frontend Lead with 6+ years of experience, I specialize in building scalable and 
              high-performance web applications. My journey has taken me through various roles where 
              I&apos;ve led teams, optimized processes, and delivered innovative solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Currently working at Vegrow in Bangalore, I lead a team of engineers to build scalable 
              applications while ensuring best practices and modern technologies are implemented. 
              I&apos;m passionate about mentoring engineers and fostering a high-performance culture.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              My expertise spans across the full stack, from frontend frameworks like React and Vue.js 
              to backend technologies and cloud infrastructure. I believe in continuous learning and 
              staying updated with the latest industry trends.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="text-blue-600 mb-4" size={32} />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {highlight.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technical Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
