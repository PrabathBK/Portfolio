'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Github, Linkedin, Mail, Award, Briefcase, Newspaper } from 'lucide-react';
import { featuredProjects } from '@/data/projects';
import { personalInfo, awards, experience, news } from '@/data/cv';
import AnimatedBackground from '@/components/AnimatedBackground';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
      mass: 1
    },
  },
};

export default function Home() {
  const topProject = featuredProjects[0];
  const latestAward = awards[0];
  const currentRole = experience[0];
  const latestNews = news[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-blue-100/30 dark:from-black dark:via-blue-950/30 dark:to-blue-900/20 relative overflow-hidden">
      <AnimatedBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto"
        >
          {/* Main Profile Card - Consolidated */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -2, boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.1)" }}
            className="md:col-span-2 lg:row-span-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/20 dark:border-white/10 flex flex-col justify-between"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start h-full">
              {/* Left Column: Profile Pic & CV Button */}
              <div className="flex-shrink-0 flex flex-col items-center gap-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                  <div className="relative w-48 h-48 rounded-2xl overflow-hidden ring-4 ring-white dark:ring-gray-800 shadow-xl transform transition-transform duration-500 group-hover:scale-[1.02]">
                    <Image
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>

                <Link
                  href="/cv"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all group mb-6"
                >
                  <span>View My CV</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Contact Icons */}
                <div className="flex items-center justify-center gap-4 w-full">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-3 bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all shadow-sm"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all shadow-sm"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Info & Details */}
              <div className="flex-1 flex flex-col text-center md:text-left h-full">
                <div>
                  <motion.h1
                    className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {personalInfo.name}
                  </motion.h1>
                  <motion.p
                    className="text-xl text-blue-600 dark:text-blue-400 mb-4 font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {personalInfo.title}
                  </motion.p>

                  {/* Current Role - Integrated */}
                  <motion.div
                    className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded-lg text-sm font-medium border border-emerald-100 dark:border-emerald-900/50 mx-auto md:mx-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                  >
                    <Briefcase className="w-4 h-4" />
                    <span>{currentRole.title} @ {currentRole.organization}</span>
                  </motion.div>

                  <motion.p
                    className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {personalInfo.summary}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-2 justify-center md:justify-start mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {personalInfo.interests.slice(0, 5).map((interest) => (
                      <span
                        key={interest}
                        className="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-200 dark:hover:border-blue-800 transition-colors cursor-default"
                      >
                        {interest}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Featured Project Tile */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -2, scale: 1.02 }}
            className="lg:row-span-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-1 shadow-lg text-white group cursor-pointer overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-[url('/img/noise.svg')] opacity-20" />
            <div className="bg-gradient-to-br from-white/10 to-transparent p-6 h-full rounded-[20px] relative z-10 flex flex-col">
              <Link href={`/projects/${topProject.id}`} className="block h-full">
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-2 bg-white/10 backdrop-blur-md rounded-xl">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold tracking-wide uppercase">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-100 transition-colors">
                    {topProject.title}
                  </h3>
                  <p className="text-blue-100 mb-6 flex-grow line-clamp-4 leading-relaxed">
                    {topProject.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {topProject.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-black/20 backdrop-blur-sm rounded-lg text-xs font-medium text-blue-50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-white/90 group-hover:text-white transition-colors mt-auto">
                    View Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Latest Achievement Tile */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -2 }}
            className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 group cursor-pointer"
          >
            <Link href="/achievements" className="block h-full">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-amber-100 dark:bg-amber-900/30 rounded-xl text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Latest Achievement
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {latestAward.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {latestAward.description}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                  <p className="text-xs font-medium text-gray-400">
                    {latestAward.date}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Latest News Tile - Spans 2 Columns */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -2 }}
            className="md:col-span-2 bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 group cursor-pointer"
          >
            <Link href={`/news/${latestNews.id}`} className="block h-full">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                    <Newspaper className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Latest News
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                  {latestNews.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {latestNews.description}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
                  <span className="px-2.5 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-300 rounded-lg text-[10px] font-bold uppercase tracking-wide">
                    {latestNews.category}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
