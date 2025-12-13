'use client';

import { motion } from 'framer-motion';
import { Download, GraduationCap, Briefcase, Award, Code, Database, Wrench, Server, CheckCircle, Users, Trophy, Mail, Phone, MapPin, BookOpen } from 'lucide-react';
import { personalInfo, education, experience, awards, certifications, skills, conferences, recommendations, extraCurricular, sportsActivities, references } from '@/data/cv';
import { useState, useEffect } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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
  const [activeSection, setActiveSection] = useState('summary');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'summary',
        'education',
        'experience',
        'awards',
        'recommendations',
        'conferences',
        'skills',
        'certifications',
        'extracurricular',
        'sports',
        'references',
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const navItems = [
    { id: 'summary', label: 'Summary', icon: BookOpen },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'awards', label: 'Awards', icon: Trophy },
    { id: 'recommendations', label: 'Recommendations', icon: Award },
    { id: 'conferences', label: 'Conferences', icon: Users },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'extracurricular', label: 'Extra-curricular', icon: Users },
    { id: 'sports', label: 'Sports', icon: Trophy },
    { id: 'references', label: 'References', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-blue-950/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 relative">
          {/* Sticky Navigation Sidebar */}
          <div className="hidden xl:block flex-shrink-0 w-56">
            <div className="sticky top-24">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4 px-2">
                  Quick Navigation
                </h3>
                <nav className="space-y-1">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${isActive
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="font-medium">{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </motion.div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 max-w-5xl">
            {/* Header with Download Button */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                      {personalInfo.name}
                    </h1>
                    <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
                      {personalInfo.title}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                          {personalInfo.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>{personalInfo.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{personalInfo.location}</span>
                      </div>
                    </div>
                  </div>
                  <a
                    href="/Prabath_Wijethilaka_Resume_Updated.pdf"
                    download="Prabath_Wijethilaka_Resume.pdf"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:shadow-lg transition-all whitespace-nowrap"
                  >
                    <Download className="w-5 h-5" />
                    <span className="font-medium">Download PDF</span>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {/* Summary */}
              <motion.section id="summary" variants={itemVariants} className="scroll-mt-24">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    Summary
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    {personalInfo.summary}
                  </p>
                  <div className="mt-4">
                    <h3 className="font-semibold text-lg mb-3">Interest Areas</h3>
                    <div className="flex flex-wrap gap-2">
                      {personalInfo.interests.map((interest) => (
                        <span
                          key={interest}
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-800 [@media(prefers-color-scheme:dark)]:text-blue-300 rounded-full text-sm"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Education */}
              <motion.section id="education" variants={itemVariants} className="scroll-mt-24">
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
                      className="relative pl-8 pb-6 border-l-2 border-blue-600 dark:border-blue-400 last:pb-0"
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
              <motion.section id="experience" variants={itemVariants} className="scroll-mt-24">
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
                      className="relative pl-8 pb-6 border-l-2 border-green-600 dark:border-green-400 last:pb-0"
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

              {/* Awards & Honors */}
              <motion.section id="awards" variants={itemVariants} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                    <Trophy className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h2 className="text-3xl font-bold">Awards & Honors</h2>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {awards.map((award) => (
                    <div
                      key={award.id}
                      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-yellow-500 dark:hover:border-yellow-500 transition-all"
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        {award.image && (
                          <div className="md:w-48 flex-shrink-0">
                            <img
                              src={award.image}
                              alt={award.title}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                        )}
                        <div className="flex-grow">
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                              {award.title}
                            </h3>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {award.date}
                            </span>
                          </div>
                          <p className="text-yellow-600 dark:text-yellow-400 font-medium mb-3">
                            {award.organization}
                          </p>
                          <p className="text-gray-700 dark:text-gray-300 mb-4">
                            {award.description}
                          </p>
                          {award.details && award.details.length > 0 && (
                            <ul className="space-y-2">
                              {award.details.map((detail, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                                  <CheckCircle className="w-4 h-4 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Recommendations */}
              <motion.section id="recommendations" variants={itemVariants} className="scroll-mt-24">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl p-6 shadow-lg border border-blue-200 dark:border-blue-800">
                  <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
                  {recommendations.map((rec, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <p className="text-gray-700 dark:text-gray-300 italic mb-3 leading-relaxed">
                        "{rec.text}"
                      </p>
                      <div className="text-sm">
                        <p className="font-semibold text-gray-900 dark:text-gray-100">
                          — {rec.author}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          {rec.position}, {rec.organization}
                        </p>
                        {rec.link && (
                          <a
                            href={rec.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            View full recommendation on LinkedIn
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Conferences & Workshops */}
              <motion.section id="conferences" variants={itemVariants} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h2 className="text-3xl font-bold">Conferences & Workshops</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {conferences.map((conf) => (
                    <div
                      key={conf.id}
                      className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-200 dark:border-gray-700"
                    >
                      <h3 className="font-bold text-lg mb-2">{conf.title}</h3>
                      <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-2">
                        {conf.role}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        {conf.date}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {conf.location}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Skills */}
              <motion.section id="skills" variants={itemVariants} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <Code className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h2 className="text-3xl font-bold">Technical Skills</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      Languages
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.languages.map((lang) => (
                        <span
                          key={lang}
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-800 [@media(prefers-color-scheme:dark)]:text-blue-300 rounded-full text-sm"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Wrench className="w-5 h-5 text-green-600 dark:text-green-400" />
                      Developer Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.developerTools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-800 [@media(prefers-color-scheme:dark)]:text-green-300 rounded-full text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Server className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      Frameworks
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.frameworks.map((framework) => (
                        <span
                          key={framework}
                          className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-800 [@media(prefers-color-scheme:dark)]:text-purple-300 rounded-full text-sm"
                        >
                          {framework}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Database className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                      Databases & Cloud
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.databases.map((db) => (
                        <span
                          key={db}
                          className="px-3 py-1 bg-orange-50 dark:bg-orange-900/20 text-orange-800 [@media(prefers-color-scheme:dark)]:text-orange-300 rounded-full text-sm"
                        >
                          {db}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Soft Skills */}
                <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-300 dark:border-gray-700">
                  <h3 className="text-lg font-semibold mb-3">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.softSkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-pink-50 dark:bg-pink-900/20 text-pink-800 [@media(prefers-color-scheme:dark)]:text-pink-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* Certifications */}
              <motion.section id="certifications" variants={itemVariants} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                    <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h2 className="text-3xl font-bold">Certifications</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {certifications.map((cert) => (
                    <div
                      key={cert.id}
                      className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
                    >
                      <h3 className="font-semibold mb-1 text-sm">{cert.title}</h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {cert.organization}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Extra-Curricular */}
              <motion.section id="extracurricular" variants={itemVariants} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                    <Users className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h2 className="text-3xl font-bold">Extra-Curricular & Volunteering</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {extraCurricular.map((activity) => (
                    <div
                      key={activity.id}
                      className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-200 dark:border-gray-700"
                    >
                      <h3 className="font-bold mb-2">{activity.title}</h3>
                      <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-1">
                        {activity.organization}
                      </p>
                      {(activity.startDate || activity.year) && (
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          {activity.year || `${activity.startDate} - ${activity.endDate}`}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Sports Activities */}
              <motion.section id="sports" variants={itemVariants} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <Trophy className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h2 className="text-3xl font-bold">Sports & Activities</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sportsActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700"
                    >
                      <h3 className="font-semibold mb-1 text-sm">{activity.title}</h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {activity.organization}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* References */}
              <motion.section id="references" variants={itemVariants} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-lg">
                    <Mail className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h2 className="text-3xl font-bold">References</h2>
                </div>
                <div className="space-y-4">
                  {references.map((ref, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                    >
                      <h3 className="text-xl font-bold mb-1">{ref.name}</h3>
                      {ref.credentials && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {ref.credentials}
                        </p>
                      )}
                      <p className="text-teal-600 dark:text-teal-400 font-medium mb-1">
                        {ref.title}
                      </p>
                      {ref.department && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                          {ref.department}
                        </p>
                      )}
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {ref.organization}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <a
                          href={`mailto:${ref.email}`}
                          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <Mail className="w-4 h-4" />
                          {ref.email}
                        </a>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <Phone className="w-4 h-4" />
                          {ref.phone}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
