'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Github, Linkedin, Mail, Award, Briefcase, Newspaper } from 'lucide-react';
import { featuredProjects } from '@/data/projects';
import { personalInfo, awards, experience, news } from '@/data/cv';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Home() {
  const topProject = featuredProjects[0];
  const latestAward = awards[0];
  const currentRole = experience[0];
  const latestNews = news[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950 relative overflow-hidden">
      {/* Professional Background Animation - Subtle Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-blue-400/10 dark:bg-blue-500/10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-purple-400/10 dark:bg-purple-500/10 blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '50%', right: '10%' }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-pink-400/10 dark:bg-pink-500/10 blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ bottom: '10%', left: '30%' }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto"
        >
          {/* Large Tile - Hero/Introduction */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.01, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            transition={{ duration: 0.3 }}
            className="md:col-span-2 lg:row-span-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col md:flex-row gap-8 h-full">
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 rounded-2xl overflow-hidden ring-4 ring-blue-500/20">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {personalInfo.name}
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                    {personalInfo.title}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {personalInfo.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {personalInfo.interests.slice(0, 4).map((interest) => (
                      <span
                        key={interest}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Featured Project Tile */}
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)",
              rotateZ: [0, -0.5, 0.5, 0]
            }}
            transition={{ duration: 0.4 }}
            className="lg:row-span-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 shadow-xl text-white group cursor-pointer overflow-hidden relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.5 }}
            />
            <Link href={`/projects/${topProject.id}`} className="block h-full relative z-10">
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <Award className="w-8 h-8 flex-shrink-0" />
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                    Featured
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:underline">
                  {topProject.title}
                </h3>
                <p className="text-white/90 mb-4 flex-grow line-clamp-4">
                  {topProject.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {topProject.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  View Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Latest Achievement Tile */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 cursor-pointer group"
          >
            <Link href="/achievements" className="block h-full">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                    <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Latest Achievement
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {latestAward.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-3">
                  {latestAward.description}
                </p>
                <div className="mt-auto pt-3 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {latestAward.date}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Current Role Tile */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <Briefcase className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Current Role
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">
                {currentRole.title}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                {currentRole.organization}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                {currentRole.description}
              </p>
              <div className="mt-auto pt-3 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {currentRole.startDate} - {currentRole.endDate}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Latest News Tile */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 cursor-pointer group"
          >
            <Link href={`/news/${latestNews.id}`} className="block h-full">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Newspaper className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Latest News
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {latestNews.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-3">
                  {latestNews.description}
                </p>
                <div className="mt-auto pt-3 border-t border-gray-200 dark:border-gray-700">
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                    {latestNews.category}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* CV Quick Link */}
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.5)"
            }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 shadow-xl text-white group cursor-pointer"
          >
            <Link href="/cv" className="block h-full">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    View My CV
                  </h3>
                  <p className="text-white/90 text-sm">
                    Explore my education, experience, and technical skills
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium mt-4">
                  Open CV <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Get in touch</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {/* Email Card */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex flex-col justify-center p-4 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-lg group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="font-semibold text-gray-900 dark:text-white">Email</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                  {personalInfo.email}
                </p>
              </a>

              {/* GitHub Card */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-center p-4 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white transition-all hover:shadow-lg group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Github className="w-5 h-5 text-gray-900 dark:text-white" />
                  <span className="font-semibold text-gray-900 dark:text-white">GitHub</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  @{personalInfo.github.split('/').pop()}
                </p>
              </a>

              {/* LinkedIn Card */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-center p-4 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-700 dark:hover:border-blue-500 transition-all hover:shadow-lg group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Linkedin className="w-5 h-5 text-blue-700 dark:text-blue-400" />
                  <span className="font-semibold text-gray-900 dark:text-white">LinkedIn</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                  Connect with me
                </p>
              </a>

              {/* Location Card */}
              <div className="flex flex-col justify-center p-4 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="font-semibold text-gray-900 dark:text-white">Location</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
