"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, TrendingUp, Award, Folder, Target, Code } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Engineering Lead',
      company: 'Vegrow',
      location: 'Bangalore',
      period: 'Aug 2024 - Present',
      type: 'Current Role',
      projects: [
        {
          name: 'Team Performance & Development Initiative',
          description: 'Established engineering excellence practices and mentorship programs',
          deliverables: [
            'Code quality framework with automated testing achieving 90% coverage',
            'Engineering KPI dashboard for tracking team performance',
            'Mentorship program resulting in 40% faster onboarding',
            'Tech talk sessions for knowledge sharing',
          ],
          myContribution: [
            'Designed and implemented code review processes and standards',
            'Organized tech talk sessions for knowledge sharing',
            'Monitored team performance using KPI dashboard and provided feedback'          ],
          technologies: ['JIRA', 'Confluence', 'Doc']
        },
        {
          name: 'Finance, Export & Admin Dashboard (3 Projects)',
          description: 'Build a simplified dashboard for finance, export and admin',
          deliverables: [
            'Finance work was automated/Apple process was simplified/Export dashboard was built for export team/Admin dashboard was made more powerful',
            'Project to have major impact on business making it a success',
            'Delivered 3 projects on time and on budget making EBITDA positive'
          ],
          myContribution: [
            'Led a team of 8 developers across frontend, backend and QA teams',
            'Designed and implemented code review processes and deployment pipelines',
            'Configured AWS infrastructure and CDN optimization for optimal performance',
            'JIRA and confluence for project management and tracking',
          ],
          technologies: ['Rails', 'React', 'Javascript', 'JIRA', 'Confluence', 'Docker', 'Kubernetes', 'AWS', 'Performance Optimization', 'Node.js', 'Jenkins']
        }
      ],
      technologies: ['React', 'Node.js', 'Javascript', 'AWS', 'Performance Optimization']
    },
    {
      title: 'Team Lead | Frontend Lead',
      company: 'Vegrow',
      location: 'Bangalore',
      period: 'May 2021 - July 2024',
      type: 'Leadership Role',
      projects: [
        {
          name: 'Build B2R Ecommerce Platform',
          description: 'Built business to retail Ecommerce Platform for Vegrow Internal use',
          deliverables: [
            'Built business to retail Ecommerce Platform for Vegrow Internal use',
            'Implemented order management system',
            'Implemented inventory management system',
          ],
          myContribution: [
            'Designed and implemented a full-scale Ecommerce platform frontend with order and inventory management system.',
            'Set up deployment pipeline using Jenkins and configured AWS S3 & CloudFront for static asset delivery.',
            'Established JIRA for streamlined project management and tracking.',
          ],
          technologies: ['React', 'JavaScript', 'Rails', 'Jenkins', 'AWS S3', 'CloudFront', 'JIRA', 'CI/CD']
        },
        {
          name: 'Internal Frontend Component Library',
          description: 'Developed a comprehensive UI component library to standardize development across teams',
          deliverables: [
            'Reusable component library with 50+ components',
            'Design system documentation and guidelines',
            'Internal NPM package with automated versioning and publishing'
          ],
          myContribution: [
            'Architected the component library structure and API design',
            'Led development team of 6 frontend engineers',
            'Established coding standards and review processes'
          ],
          technologies: ['React', 'JavaScript', 'Storybook', 'Rollup', 'NPM', 'CSS-in-JS']
        },
        {
          name: 'CI/CD Pipeline & Deployment Infrastructure',
          description: 'Built automated deployment pipelines for web applications',
          deliverables: [
            'Jenkins CI/CD pipelines reducing deployment time by 80%',
            'AWS S3 and CloudFront configuration for optimal performance and zero downtime',
            'Automated testing and quality gates achieving 95% reliability'
          ],
          myContribution: [
            'Designed and implemented entire CI/CD architecture',
            'Configured AWS infrastructure and CDN optimization',
            'Mentored team on DevOps best practices and performance optimization'
          ],
          technologies: ['Jenkins', 'AWS S3', 'CloudFront', 'Docker', 'Bash']
        }
      ],
      technologies: ['React', 'JavaScript', 'Rails', 'Jenkins', 'AWS S3', 'CloudFront', 'JIRA', 'CI/CD']
    },
    {
      title: 'Staff Software Engineer',
      company: 'Drishti (Acq. by Apple)',
      location: 'Bangalore',
      period: 'Feb 2019 - Apr 2021',
      type: 'Senior Role',
      projects: [
        {
          name: 'Real-time Video Analytics Platform',
          description: 'Built an end-to-end analytics platform for extracting insights from live video streams',
          deliverables: [
            'Real-time video processing system handling 50+ concurrent streams',
            'Analytics dashboard with interactive visualizations',
            'Machine learning pipeline for automated anomaly detection'
          ],
          myContribution: [
            'Build a custom live video player using Shaka Player with all flexibilities',
            'Developed WebSocket-based real-time live video streaming',
            'Collaborated with ML team to integrate computer vision models and present insights'
          ],
          technologies: ['WebSocket', 'FFmpeg', 'AmCharts', 'Vue.js', 'Shaka Player']
        },
        {
          name: 'Interactive Operations monitoring dashboard',
          description: 'Created comprehensive monitoring and control interface for manufacturing operations',
          deliverables: [
            'Interactive maps and charts for real-time monitoring',
            'Live video streaming integration with low latency',
            'Alert system with automated notifications'
          ],
          myContribution: [
            'Designed and implemented the entire frontend architecture in Vue.js',
            'Integrated live video streaming with custom controls',
            'Built responsive data visualization components'
          ],
          technologies: ['Vue.js', 'Socket.io', 'JavaScript', 'AmCharts']
        },
        {
          name: 'Interactive Annotation tool using Pybossa',
          description: 'Created an interactive annotation tool using Pybossa for AI/ML applications',
          deliverables: [
            'Interactive annotation tool for AI/ML applications using Pybossa',
            'Frontend using Vue.js',
            'Backend using Python'
          ],
          myContribution: [
            'Designed and implemented the entire frontend architecture in Vue.js',
            'Contribute to the backend using Python in Pybossa',
            'Built responsive data visualization components'
          ],
          technologies: ['Vue.js', 'Python', 'Pybossa', 'JavaScript', 'AmCharts']
        }
      ],
      technologies: ['WebSocket', 'Analytics Platform', 'Real-time Data', 'Interactive Charts', 'Video Streaming', 'Vue.js', 'Python', 'Pybossa', 'JavaScript', 'AmCharts']
    },
    {
      title: 'Networking Intern',
      company: 'TCS',
      location: 'Patna',
      period: 'Aug 2018 - Dec 2018',
      type: 'Internship',
      projects: [
        {
          name: 'Network Security',
          description: 'Had a hands on experience in Network Security handeling TCS internal applications',
          deliverables: [
            'Hands on experience in Network Security handeling TCS internal applications'
          ],
          myContribution: [
            'Hands on experience in Network Security handeling TCS internal applications'
          ],
          technologies: ['Network Security']
        }
      ],
      technologies: ['Network Security']
    }
  ];

  const certifications = [
    {
      name: 'ALTCAMPUS',
      description: 'Fullstack web development course',
      icon: Award
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work <span className="text-blue-600">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey building scalable applications and leading high-performing teams
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exp.type === 'Current Role' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                          : exp.type === 'Leadership Role'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                          : 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-300 mb-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp size={16} />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <Folder size={20} className="text-blue-600" />
                    Key Projects
                  </h4>
                  <div className="space-y-6">
                    {exp.projects.map((project, projectIdx) => (
                      <motion.div
                        key={projectIdx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: projectIdx * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600"
                      >
                        <div className="mb-4">
                          <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                            <Code size={18} className="text-green-600" />
                            {project.name}
                          </h5>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-4">
                          <div>
                            <h6 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                              <Target size={16} className="text-blue-600" />
                              Project Deliverables
                            </h6>
                            <ul className="space-y-2">
                              {project.deliverables.map((deliverable, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                                  <span>{deliverable}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h6 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                              <Users size={16} className="text-green-600" />
                              My Contribution
                            </h6>
                            <ul className="space-y-2">
                              {project.myContribution.map((contribution, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                                  <span>{contribution}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div>
                          <h6 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                            Tech Stack
                          </h6>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Certifications
          </h3>
          <div className="flex justify-center">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white text-center max-w-md"
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon size={48} className="mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">{cert.name}</h4>
                  <p className="opacity-90">{cert.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
