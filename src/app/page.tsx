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
          {/* Large Tile - Hero/Introduction */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.1)" }}
            className="md:col-span-2 lg:row-span-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/20 dark:border-white/10"
          >
            <div className="flex flex-col md:flex-row gap-8 h-full items-center md:items-start">
              <div className="flex-shrink-0 relative group">
                <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative w-48 h-48 rounded-2xl overflow-hidden ring-4 ring-white dark:ring-gray-800 shadow-xl transform transition-transform duration-500 group-hover:scale-[1.02]">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between text-center md:text-left">
                <div>
                  <motion.h1
                    className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
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
                  <motion.p
                    className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {personalInfo.summary}
                  </motion.p>
                  <motion.div
                    className="flex flex-wrap gap-2 justify-center md:justify-start mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {personalInfo.interests.slice(0, 4).map((interest, index) => (
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
            whileHover={{ y: -5, scale: 1.02 }}
            className="lg:row-span-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-1 shadow-lg text-white group cursor-pointer overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
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
            whileHover={{ y: -5 }}
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

          {/* Current Role Tile */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Current Role
                </span>
              </div>
              <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">
                {currentRole.title}
              </h3>
              <p className="text-emerald-600 dark:text-emerald-400 font-medium text-sm mb-3">
                {currentRole.organization}
              </p>
              <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                <p className="text-xs font-medium text-gray-400">
                  {currentRole.startDate} - {currentRole.endDate}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Latest News Tile */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 group cursor-pointer"
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

          {/* CV Quick Link */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-blue-600 dark:bg-blue-700 rounded-3xl p-6 shadow-lg text-white group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />
            <Link href="/cv" className="block h-full relative z-10">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    View My CV
                  </h3>
                  <p className="text-blue-100 text-sm line-clamp-2">
                    Explore my full professional journey
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold mt-4">
                  Open CV <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Contact Details - Compact Row */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-sm border border-gray-200 dark:border-gray-800"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Get in touch</h3>
              <div className="h-px flex-1 bg-gray-100 dark:bg-gray-800 ml-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Email Card */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
              >
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Email</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white break-all">{personalInfo.email}</p>
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
              >
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-900 dark:text-white group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">GitHub</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">@{personalInfo.github.split('/').pop()}</p>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
              >
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-700 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">LinkedIn</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Connect</p>
                </div>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
