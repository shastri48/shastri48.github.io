"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Trophy, Star, ThumbsUp, Code, Target } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Github,
      title: 'GitHub Repositories',
      value: '25+',
      description: 'Public repositories with various projects',
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: Trophy,
      title: 'CodeWars Rank',
      value: '5 Kyu',
      description: 'Solved 65+ Kata',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Target,
      title: 'LeetCode Practice',
      value: 'Daily Progress',
      description: 'Focused on strengthening problem-solving and algorithmic thinking',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: ThumbsUp,
      title: 'StackOverflow',
      value: '587',
      description: 'Reputation points helping developers',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Star,
      title: 'GitHub Stars',
      value: '7',
      description: 'Stars across all repositories',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Code,
      title: 'Years Experience',
      value: '6+',
      description: 'Professional development experience',
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my coding journey and contributions to the developer community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center mb-6`}>
                  <Icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-blue-600 to-purple-600 mb-3">
                  {achievement.value}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              I believe in continuous improvement and regularly participate in coding challenges, 
              contribute to open source projects, and help fellow developers in the community. 
              These achievements represent my commitment to excellence and knowledge sharing.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
