'use client';

import { use } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Calendar, ArrowLeft, ExternalLink, Trophy, Star, Users, Tag } from 'lucide-react';
import { awards } from '@/data/cv';
import { notFound } from 'next/navigation';

export default function AchievementDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const achievement = awards.find((award) => award.id === id);

  if (!achievement) {
    notFound();
  }

  // Get related achievements (same category, exclude current)
  const relatedAchievements = awards
    .filter((award) => award.id !== achievement.id && award.category === achievement.category)
    .slice(0, 3);

  // Category color mappings
  const categoryColors: Record<string, { bg: string; text: string; gradient: string }> = {
    'FPGA/Design': {
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      text: 'text-blue-700 dark:text-blue-300',
      gradient: 'from-blue-600 to-cyan-600',
    },
    'IoT': {
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      text: 'text-blue-700 dark:text-blue-300',
      gradient: 'from-blue-600 to-blue-800',
    },
    'Embedded Systems': {
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      text: 'text-blue-700 dark:text-blue-300',
      gradient: 'from-blue-600 to-blue-800',
    },
    'Healthcare': {
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      text: 'text-blue-700 dark:text-blue-300',
      gradient: 'from-blue-600 to-blue-800',
    },
    'Entrepreneurship': {
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      text: 'text-blue-700 dark:text-blue-300',
      gradient: 'from-blue-600 to-blue-800',
    },
  };

  const colors = categoryColors[achievement.category] || {
    bg: 'bg-gray-100 dark:bg-gray-900/30',
    text: 'text-gray-700 dark:text-gray-300',
    gradient: 'from-gray-600 to-slate-600',
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section with Animated Trophy */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`relative min-h-[70vh] bg-gradient-to-br ${colors.gradient} overflow-hidden`}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Trophy Icons floating */}
          {[
            { left: '10%', top: '15%', duration: 8 },
            { left: '25%', top: '65%', duration: 10 },
            { left: '45%', top: '25%', duration: 7 },
            { left: '65%', top: '75%', duration: 9 },
            { left: '80%', top: '35%', duration: 11 },
            { left: '15%', top: '85%', duration: 6 },
            { left: '90%', top: '55%', duration: 8 },
            { left: '35%', top: '45%', duration: 10 },
            { left: '55%', top: '10%', duration: 9 },
            { left: '70%', top: '90%', duration: 7 },
            { left: '5%', top: '50%', duration: 11 },
            { left: '50%', top: '70%', duration: 8 },
            { left: '75%', top: '20%', duration: 9 },
            { left: '30%', top: '95%', duration: 10 },
            { left: '85%', top: '60%', duration: 7 },
          ].map((position, i) => (
            <motion.div
              key={i}
              className="absolute text-white/10"
              animate={{
                y: [0, -30, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: position.duration,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                left: position.left,
                top: position.top,
              }}
            >
              <Trophy className="w-8 h-8" />
            </motion.div>
          ))}

          {/* Stars */}
          {[
            { left: '8%', top: '20%', duration: 3 },
            { left: '22%', top: '55%', duration: 4 },
            { left: '38%', top: '15%', duration: 5 },
            { left: '52%', top: '80%', duration: 3.5 },
            { left: '68%', top: '30%', duration: 4.5 },
            { left: '78%', top: '70%', duration: 3 },
            { left: '12%', top: '90%', duration: 5 },
            { left: '42%', top: '40%', duration: 4 },
            { left: '62%', top: '60%', duration: 3.5 },
            { left: '88%', top: '25%', duration: 4.5 },
            { left: '18%', top: '75%', duration: 5 },
            { left: '48%', top: '10%', duration: 3 },
            { left: '72%', top: '95%', duration: 4 },
            { left: '32%', top: '50%', duration: 3.5 },
            { left: '92%', top: '45%', duration: 4.5 },
            { left: '28%', top: '85%', duration: 5 },
            { left: '58%', top: '35%', duration: 3 },
            { left: '82%', top: '65%', duration: 4 },
            { left: '6%', top: '12%', duration: 3.5 },
            { left: '95%', top: '78%', duration: 4.5 },
          ].map((position, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: position.duration,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                left: position.left,
                top: position.top,
              }}
            >
              <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
            </motion.div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <Link
              href="/achievements"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-lg">Back to Achievements</span>
            </Link>

            <div className="flex flex-wrap items-center gap-4">
              {/* Trophy Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              >
                <div className="p-4 bg-white/20 backdrop-blur-lg rounded-2xl">
                  <Trophy className="w-12 h-12 text-yellow-300" />
                </div>
              </motion.div>

              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className={`inline-flex items-center gap-2 px-4 py-2 ${colors.bg} ${colors.text} backdrop-blur-sm font-medium rounded-full`}
              >
                <Tag className="w-4 h-4" />
                {achievement.category}
              </motion.span>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 text-white/90"
              >
                <Calendar className="w-4 h-4" />
                <span>{achievement.date}</span>
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl"
            >
              {achievement.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-2xl inline-flex"
            >
              <Award className="w-6 h-6 text-white" />
              <div>
                <p className="text-white/70 text-sm">Awarded by</p>
                <p className="text-white font-semibold text-lg">{achievement.organization}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="currentColor"
              className="text-gray-50 dark:text-gray-900"
              d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,69.3C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            />
          </svg>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Featured Image */}
            {achievement.image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                
                {/* Image Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl p-6">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Awarded by</p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">
                      {achievement.organization}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Description Card */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <h2 className={`text-3xl font-bold mb-6 bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
                About This Achievement
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                {achievement.description}
              </p>

              {/* Achievement Details */}
              {achievement.details.length > 0 && (
                <div className={`bg-gradient-to-r ${colors.gradient} p-[2px] rounded-2xl`}>
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Star className={`w-5 h-5 ${colors.text}`} />
                      Key Highlights
                    </h3>
                    <ul className="space-y-3">
                      {achievement.details.map((detail, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className={`mt-1 p-1 rounded-full ${colors.bg}`}>
                            <div className="w-2 h-2 rounded-full bg-current" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 flex-1">
                            {detail}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Impact Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className={`bg-gradient-to-r ${colors.gradient} rounded-3xl p-8 text-white shadow-xl`}
            >
              <div className="flex items-start gap-4">
                <div className="p-4 bg-white/20 backdrop-blur-lg rounded-2xl">
                  <Trophy className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Impact & Recognition</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    This achievement demonstrates excellence in {achievement.category.toLowerCase()} and
                    represents significant contribution to the field. It showcases innovation, dedication,
                    and the ability to deliver impactful solutions.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Achievement Stats */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Award className={`w-5 h-5 ${colors.text}`} />
                Achievement Details
              </h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Category</p>
                  <span className={`inline-block px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-medium`}>
                    {achievement.category}
                  </span>
                </div>

                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Date Awarded</p>
                  <p className="font-medium flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {achievement.date}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Organization</p>
                  <p className="font-medium">{achievement.organization}</p>
                </div>

                <div className={`p-4 ${colors.bg} rounded-2xl`}>
                  <p className={`text-sm ${colors.text} font-medium mb-1`}>Achievement Level</p>
                  <p className="text-2xl font-bold">
                    {achievement.title.includes('Champion') ? '🥇 Champion' :
                     achievement.title.includes('Runners-Up') ? '🥈 Runners-Up' :
                     achievement.title.includes('Finalist') ? '🏅 Finalist' : '🏆 Award'}
                  </p>
                </div>
              </div>
            </div>

            {/* Related Achievements */}
            {relatedAchievements.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold mb-4">Related Achievements</h3>
                <div className="space-y-4">
                  {relatedAchievements.map((item) => (
                    <Link
                      key={item.id}
                      href={`/achievements/${item.id}`}
                      className="block group"
                    >
                      <div className={`p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-current ${colors.text} transition-all hover:shadow-lg`}>
                        <p className="font-medium mb-2 group-hover:underline line-clamp-2">
                          {item.title}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.date}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className={`bg-gradient-to-br ${colors.gradient} rounded-3xl p-6 text-white shadow-xl`}
            >
              <Users className="w-8 h-8 mb-3" />
              <h3 className="text-lg font-bold mb-2">Explore More</h3>
              <p className="text-white/90 text-sm mb-4">
                Check out other achievements and projects
              </p>
              <Link
                href="/achievements"
                className="block w-full py-3 bg-white/20 hover:bg-white/30 backdrop-blur-lg rounded-xl text-center font-medium transition-colors"
              >
                View All Achievements
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
