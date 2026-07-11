"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, TrendingUp, Award, Folder, Target, Code } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer 3 - Frontend',
      company: 'Cashfree Payments',
      location: 'Bangalore',
      period: 'Apr 2026 - Present',
      type: 'Current Role',
      projects: [
        {
          name: 'E2E Merchant Onboarding Platform',
          description: 'Built an end-to-end onboarding platform for merchants covering KYC and compliance workflows',
          deliverables: [
            'KYC document upload flow with validation',
            'OTP verification and bank account validation',
            'Automated compliance workflows reducing manual review effort'
          ],
          myContribution: [
            'Led frontend development for merchant-facing payment products',
            'Built the KYC document upload, OTP verification and bank account validation flows',
            'Implemented automated compliance workflows end-to-end'
          ],
          technologies: ['React.js', 'Next.js', 'TypeScript', 'Redux', 'REST APIs']
        },
        {
          name: 'Payment Gateway Checkout',
          description: 'Built a unified checkout solution supporting multiple payment methods with reliability at scale',
          deliverables: [
            'Checkout support for Cards, UPI, Net Banking, Wallets and EMI',
            'Automated retry mechanisms for failed payments',
            'Improved checkout performance through rendering and API optimizations'
          ],
          myContribution: [
            'Built the Payment Gateway Checkout solution supporting Cards, UPI, Net Banking, Wallets and EMI',
            'Implemented robust error handling and automated retry mechanisms for reliability',
            'Optimized checkout performance through advanced rendering improvements, API optimizations and code splitting'
          ],
          technologies: ['React.js', 'Next.js', 'TypeScript', 'Redux', 'REST APIs', 'Storybook', 'Webpack']
        },
        {
          name: 'CI/CD Test Automation',
          description: 'Implemented automation pipelines to ensure code quality and deployment stability',
          deliverables: [
            'Unit and UI test automation integrated into CI/CD',
            'Improved deployment stability and reduced regressions'
          ],
          myContribution: [
            'Implemented comprehensive CI/CD automation pipelines for unit and UI test cases using Jest and Playwright'
          ],
          technologies: ['Jest', 'Playwright', 'AWS', 'CI/CD']
        }
      ],
      technologies: ['React.js', 'Next.js', 'TypeScript', 'Redux', 'REST APIs', 'Storybook', 'Webpack', 'AWS']
    },
    {
      title: 'Engineering Lead',
      company: 'Vegrow',
      location: 'Bangalore',
      period: 'Aug 2024 - Mar 2026',
      type: 'Leadership Role',
      projects: [
        {
          name: 'Banana Export Operations Dashboard',
          description: 'Designed and owned a scalable React application for internal export operations teams',
          deliverables: [
            'Operations dashboard enabling ~150 container dispatches per week',
            'Frontend architecture focused on performance, scalability and long-term maintainability'
          ],
          myContribution: [
            'Designed and owned the scalable React application end-to-end for the export operations team',
            'Contributed to frontend architecture decisions focused on performance and maintainability'
          ],
          technologies: ['ReactJs', 'NextJs', 'Storybook', 'Cypress', 'Webpack']
        },
        {
          name: 'Customer Onboarding & Relationship Management System',
          description: 'Built an end-to-end CRM system replacing a third-party vendor',
          deliverables: [
            'Reduced annual CRM costs by ₹45 lakhs',
            'Cut customer onboarding time from 1 day to ~8 minutes'
          ],
          myContribution: [
            'Built the end-to-end Customer Onboarding & Relationship Management system replacing a third-party CRM',
            'Drove the effort that reduced annual costs by ₹45 lakhs and onboarding time from 1 day to ~8 minutes'
          ],
          technologies: ['ReactJs', 'NextJs', 'Ruby on Rails', 'AWS S3', 'Cloudfront']
        },
        {
          name: 'AI-Assisted Engineering Velocity Initiative',
          description: 'Improved engineering velocity through AI-assisted development practices',
          deliverables: [
            'Reduced feature delivery time by ~33%',
            'Maintained high code quality while resolving production issues'
          ],
          myContribution: [
            'Improved engineering velocity by driving AI-assisted development adoption (Windsurf, Claude AI)',
            'Reduced feature delivery time by ~33% while maintaining high code quality and resolving production issues'
          ],
          technologies: ['Windsurf', 'Claude AI', 'ReactJs', 'Ruby on Rails']
        }
      ],
      technologies: ['ReactJs', 'NextJs', 'Storybook', 'Cypress', 'Webpack', 'Ruby on Rails', 'Jenkins', 'AWS S3', 'Cloudfront']
    },
    {
      title: 'Senior Software Engineer',
      company: 'Vegrow',
      location: 'Bangalore',
      period: 'May 2021 - July 2024',
      type: 'Senior Role',
      projects: [
        {
          name: 'B2B Payments & Delivery Platform',
          description: 'Owned end-to-end webapp development for business-critical B2B applications',
          deliverables: [
            'Instant payment collection and same-day (EOD) settlements',
            'Last Mile Delivery workflows reducing payment cycles from 3-7 days to same day'
          ],
          myContribution: [
            'Owned end-to-end webapps development for business-critical B2B applications',
            'Built scalable React UI and a composable architecture enabling instant payment collection, same-day settlements and Last Mile Delivery workflows'
          ],
          technologies: ['ReactJs', 'NextJs', 'Ruby on Rails', 'AWS S3', 'Cloudfront']
        },
        {
          name: 'Internal Frontend Component Library',
          description: 'Built and standardized a shared component library and composable UI system',
          deliverables: [
            'Reduced bundle size from ~30MB to ~12MB',
            'Consistent UX across applications and faster feature development across teams'
          ],
          myContribution: [
            'Built and standardized a shared component library and composable UI system',
            'Reduced bundle size from ~30MB to ~12MB, improving load times and ensuring consistent UX across applications'
          ],
          technologies: ['React', 'JavaScript', 'Storybook', 'CSS-in-JS']
        },
        {
          name: 'CI/CD Pipeline & Deployment Infrastructure',
          description: 'Optimized frontend build, deployment and runtime performance',
          deliverables: [
            'Reduced deployment time from ~30 minutes to ~4 minutes with zero downtime',
            'Efficient REST API integrations with robust async workflows and error handling'
          ],
          myContribution: [
            'Optimized frontend build, deployment and runtime performance through advanced Webpack configuration, code splitting and CI pipeline improvements',
            'Ensured efficient REST API integrations with robust async workflows, error handling and improved runtime stability'
          ],
          technologies: ['Jenkins', 'AWS S3', 'CloudFront', 'Webpack']
        }
      ],
      technologies: ['ReactJs', 'NextJs', 'Webpack', 'Ruby on Rails', 'Jenkins', 'AWS S3', 'Cloudfront']
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
