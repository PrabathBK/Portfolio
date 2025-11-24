'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Award, Trophy, Medal, Star, ExternalLink, CheckCircle2, Sparkles, ArrowRight, Share2 } from 'lucide-react';
import { awards } from '@/data/cv';
import { use } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function AchievementDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const award = awards.find(a => a.id === id);

  if (!award) {
    notFound();
  }

  const isChampion = award.title.toLowerCase().includes('champion');
  const isRunnerUp = award.title.toLowerCase().includes('runners-up');

  // Get related achievements (same category or just others)
  const relatedAwards = awards
    .filter(a => a.id !== award.id && a.category === award.category)
    .slice(0, 2);

  // Fallback if no related awards in same category
  if (relatedAwards.length === 0) {
    relatedAwards.push(...awards.filter(a => a.id !== award.id).slice(0, 2));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-blue-100/30 dark:from-black dark:via-blue-950/30 dark:to-blue-900/20 relative overflow-hidden py-12">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/achievements"
            className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to Achievements</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Top Row: Hero Image (Left 2/3) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl group"
          >
            {award.image ? (
              <Image
                src={award.image}
                alt={award.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center">
                <Trophy className="w-32 h-32 text-white/20" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 w-full">
              <p className="text-gray-300 text-sm font-medium mb-2 uppercase tracking-wider">Awarded by</p>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {award.organization}
              </h1>
            </div>
          </motion.div>

          {/* Top Row: Details Card (Right 1/3) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1 bg-white/10 dark:bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Achievement Details</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Category</p>
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                    {award.category}
                  </span>
                </div>

                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Date Awarded</p>
                  <div className="flex items-center gap-2 text-gray-900 dark:text-white font-medium">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    {award.date}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Organization</p>
                  <p className="text-gray-900 dark:text-white font-medium">{award.organization}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-blue-600/10 to-blue-800/10 rounded-xl border border-blue-200 dark:border-blue-900/50">
              <p className="text-sm text-blue-600 dark:text-blue-400 mb-1 font-medium">Achievement Level</p>
              <div className="flex items-center gap-2">
                {isChampion ? (
                  <Trophy className="w-5 h-5 text-yellow-500" />
                ) : isRunnerUp ? (
                  <Medal className="w-5 h-5 text-gray-400" />
                ) : (
                  <Award className="w-5 h-5 text-blue-500" />
                )}
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  {isChampion ? 'Champion' : isRunnerUp ? 'Runners-Up' : 'Award Recipient'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Middle Row: About & Highlights (Left 2/3) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-white/10 dark:bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-xl"
          >
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">About This Achievement</h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              {award.description}
            </p>

            {award.details && award.details.length > 0 && (
              <div className="bg-gray-50/50 dark:bg-gray-900/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Key Highlights</h3>
                </div>
                <ul className="space-y-3">
                  {award.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>

          {/* Middle Row: Related Achievements (Right 1/3) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1 bg-white/10 dark:bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-xl"
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Related Achievements</h3>
            <div className="space-y-4">
              {relatedAwards.map((related) => (
                <Link key={related.id} href={`/achievements/${related.id}`} className="block group">
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {related.title}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{related.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Bottom Row: Impact (Left 2/3) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-8 shadow-xl text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl" />
            <div className="relative z-10 flex items-start gap-6">
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Impact & Recognition</h3>
                <p className="text-blue-50 leading-relaxed">
                  This achievement demonstrates excellence in {award.category.toLowerCase()} and represents significant contribution to the field. It showcases innovation, dedication, and the ability to deliver impactful solutions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Row: Explore More (Right 1/3) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-1 bg-blue-500 rounded-3xl p-8 shadow-xl text-white flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-10 -mb-10 blur-2xl" />
            <div className="relative z-10">
              <div className="mb-6">
                <Sparkles className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">Explore More</h3>
                <p className="text-blue-100 text-sm">Check out other achievements and projects</p>
              </div>
              <Link
                href="/achievements"
                className="block w-full py-3 px-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl text-center font-semibold transition-colors"
              >
                View All Achievements
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
