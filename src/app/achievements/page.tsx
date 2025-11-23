'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Calendar, ExternalLink, Trophy, Star, Medal, ArrowRight } from 'lucide-react';
import { awards } from '@/data/cv';

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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const categoryColors: Record<string, { bg: string; text: string; icon: string; gradient: string }> = {
  'FPGA/Design': {
    bg: 'bg-blue-100 dark:bg-blue-900/30',
    text: 'text-blue-700 dark:text-blue-300',
    icon: 'text-blue-600 dark:text-blue-400',
    gradient: 'from-blue-600 to-blue-800',
  },
  'IoT': {
    bg: 'bg-blue-100 dark:bg-blue-900/30',
    text: 'text-blue-700 dark:text-blue-300',
    icon: 'text-blue-600 dark:text-blue-400',
    gradient: 'from-blue-600 to-blue-800',
  },
  'Embedded Systems': {
    bg: 'bg-blue-100 dark:bg-blue-900/30',
    text: 'text-blue-700 dark:text-blue-300',
    icon: 'text-blue-600 dark:text-blue-400',
    gradient: 'from-blue-600 to-blue-800',
  },
  'Healthcare': {
    bg: 'bg-blue-100 dark:bg-blue-900/30',
    text: 'text-blue-700 dark:text-blue-300',
    icon: 'text-blue-600 dark:text-blue-400',
    gradient: 'from-blue-600 to-blue-800',
  },
  'Entrepreneurship': {
    bg: 'bg-blue-100 dark:bg-blue-900/30',
    text: 'text-blue-700 dark:text-blue-300',
    icon: 'text-blue-600 dark:text-blue-400',
    gradient: 'from-blue-600 to-blue-800',
  },
};

export default function AchievementsPage() {
  // Count different types
  const championshipsCount = awards.filter(a => a.title.toLowerCase().includes('champion')).length;
  const runnersUpCount = awards.filter(a => a.title.toLowerCase().includes('runners-up')).length;

  return (
    <div className="min-h-screen bg-white dark:bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-block mb-6"
          >
            <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full">
              <Trophy className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Achievements & Awards
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Recognition and accomplishments throughout my academic and professional journey
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-300 dark:border-blue-900 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full -mr-16 -mt-16" />
            <Trophy className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {awards.length}
            </div>
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Awards
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-300 dark:border-blue-900 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full -mr-16 -mt-16" />
            <Medal className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {championshipsCount}
            </div>
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Championships
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-300 dark:border-blue-900 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full -mr-16 -mt-16" />
            <Star className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-3 fill-blue-600 dark:fill-blue-400" />
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {runnersUpCount}
            </div>
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Runners-Up
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-300 dark:border-blue-900 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full -mr-16 -mt-16" />
            <Award className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              International
            </div>
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Recognition
            </div>
          </motion.div>
        </motion.div>

        {/* Awards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {awards.map((award, index) => {
            const colors = categoryColors[award.category] || categoryColors['FPGA/Design'];
            
            return (
              <motion.div
                key={award.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link href={`/achievements/${award.id}`}>
                  <div className="h-full bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg border border-gray-200 dark:border-blue-900 hover:shadow-2xl transition-all duration-300">
                    {/* Image Section */}
                    {award.image && (
                      <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
                        <Image
                          src={award.image}
                          alt={award.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                        
                        {/* Category Badge on Image */}
                        <div className="absolute top-4 right-4">
                          <span className={`px-4 py-2 ${colors.bg} backdrop-blur-sm ${colors.text} text-sm font-medium rounded-full shadow-lg`}>
                            {award.category}
                          </span>
                        </div>

                        {/* Award Type Badge */}
                        <div className="absolute bottom-4 left-4">
                          <div className="flex items-center gap-2 px-3 py-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full">
                            {award.title.includes('Champion') ? (
                              <>
                                <Trophy className="w-4 h-4 text-blue-600" />
                                <span className="text-sm font-bold text-blue-600">Champion</span>
                              </>
                            ) : award.title.includes('Runners-Up') ? (
                              <>
                                <Medal className="w-4 h-4 text-blue-600" />
                                <span className="text-sm font-bold text-blue-600">Runners-Up</span>
                              </>
                            ) : (
                              <>
                                <Award className="w-4 h-4 text-blue-600" />
                                <span className="text-sm font-bold text-blue-600">Award</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Content Section */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{award.date}</span>
                      </div>

                      <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {award.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 text-sm">
                        {award.description}
                      </p>

                      {/* Organization */}
                      <div className={`pt-4 border-t border-gray-200 dark:border-blue-900 flex items-center justify-between`}>
                        <div className="flex items-center gap-2">
                          <div className={`p-2 ${colors.bg} rounded-lg`}>
                            <Award className={`w-4 h-4 ${colors.icon}`} />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Awarded by</p>
                            <p className="text-sm font-medium text-gray-900 dark:text-white line-clamp-1">
                              {award.organization}
                            </p>
                          </div>
                        </div>
                        
                        <ArrowRight className={`w-5 h-5 ${colors.icon} group-hover:translate-x-1 transition-transform`} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
