'use client';

import { motion } from 'framer-motion';
import { Download, GraduationCap, Briefcase, Award, Code, Database, Wrench, Server, CheckCircle } from 'lucide-react';
import { personalInfo, education, experience, awards, certifications, skills } from '@/data/cv';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function CVPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Download Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Curriculum Vitae
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {personalInfo.name} - {personalInfo.title}
            </p>
          </div>
          <a
            href="/Prabath_Wijethilaka_Resume_Updated.pdf"
            download="Prabath_Wijethilaka_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            <Download className="w-5 h-5" />
            <span className="font-medium">Download PDF</span>
          </a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Education */}
          <motion.section variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="relative pl-8 pb-8 border-l-2 border-blue-600 dark:border-blue-400 last:pb-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {edu.institution}
                    </p>
                    {edu.gpa && (
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        CGPA: {edu.gpa}
                      </p>
                    )}
                    <ul className="space-y-2">
                      {edu.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Experience */}
          <motion.section variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <Briefcase className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div
                  key={exp.id}
                  className="relative pl-8 pb-8 border-l-2 border-green-600 dark:border-green-400 last:pb-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-green-600 dark:bg-green-400 rounded-full"></div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    <p className="text-green-600 dark:text-green-400 font-medium mb-2">
                      {exp.organization}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.bulletPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Skills */}
          <motion.section variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold">Technical Skills</h2>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-green-600 dark:text-green-400" />
                  Developer Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.developerTools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Server className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((framework) => (
                    <span
                      key={framework}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm"
                    >
                      {framework}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Database className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  Databases & Cloud
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((db) => (
                    <span
                      key={db}
                      className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-sm"
                    >
                      {db}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Certifications */}
          <motion.section variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h2 className="text-3xl font-bold">Certifications</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <h3 className="font-semibold mb-1">{cert.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {cert.organization}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}
