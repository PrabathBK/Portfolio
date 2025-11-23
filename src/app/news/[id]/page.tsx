'use client';

import { use } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowLeft, ExternalLink, Tag, Share2 } from 'lucide-react';
import { news } from '@/data/cv';
import { notFound } from 'next/navigation';

export default function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const newsItem = news.find((item) => item.id === id);

  if (!newsItem) {
    notFound();
  }

  // Get related news (same category, exclude current)
  const relatedNews = news
    .filter((item) => item.id !== newsItem.id && item.category === newsItem.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] min-h-[500px] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 overflow-hidden"
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0">
          {[
            { x1: '10%', y1: '20%', x2: '90%', y2: '80%', duration: 25 },
            { x1: '80%', y1: '10%', x2: '20%', y2: '90%', duration: 28 },
            { x1: '30%', y1: '70%', x2: '70%', y2: '30%', duration: 22 },
            { x1: '60%', y1: '40%', x2: '40%', y2: '60%', duration: 30 },
            { x1: '15%', y1: '85%', x2: '85%', y2: '15%', duration: 26 },
            { x1: '90%', y1: '50%', x2: '10%', y2: '50%', duration: 24 },
            { x1: '50%', y1: '10%', x2: '50%', y2: '90%', duration: 27 },
            { x1: '25%', y1: '25%', x2: '75%', y2: '75%', duration: 23 },
            { x1: '75%', y1: '75%', x2: '25%', y2: '25%', duration: 29 },
            { x1: '40%', y1: '15%', x2: '60%', y2: '85%', duration: 21 },
            { x1: '65%', y1: '55%', x2: '35%', y2: '45%', duration: 26 },
            { x1: '20%', y1: '60%', x2: '80%', y2: '40%', duration: 28 },
            { x1: '85%', y1: '30%', x2: '15%', y2: '70%', duration: 25 },
            { x1: '45%', y1: '80%', x2: '55%', y2: '20%', duration: 24 },
            { x1: '70%', y1: '20%', x2: '30%', y2: '80%', duration: 27 },
            { x1: '35%', y1: '65%', x2: '65%', y2: '35%', duration: 22 },
            { x1: '55%', y1: '45%', x2: '45%', y2: '55%', duration: 29 },
            { x1: '12%', y1: '88%', x2: '88%', y2: '12%', duration: 23 },
            { x1: '78%', y1: '22%', x2: '22%', y2: '78%', duration: 26 },
            { x1: '48%', y1: '52%', x2: '52%', y2: '48%', duration: 25 },
          ].map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              animate={{
                x: [particle.x1, particle.x2],
                y: [particle.y1, particle.y2],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                left: particle.x1,
                top: particle.y1,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative h-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-lg">Back to News</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white font-medium rounded-full"
              >
                <Tag className="w-4 h-4" />
                {newsItem.category}
              </motion.span>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 text-white/90"
              >
                <Calendar className="w-4 h-4" />
                <span>{newsItem.date}</span>
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              {newsItem.title}
            </motion.h1>

            {newsItem.link && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <a
                  href={newsItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>View External Link</span>
                </a>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="currentColor"
              className="text-gray-50 dark:text-gray-900"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            />
          </svg>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            {/* Featured Image */}
            {newsItem.image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="relative h-[400px] rounded-2xl overflow-hidden mb-8 shadow-2xl"
              >
                <Image
                  src={newsItem.image}
                  alt={newsItem.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>
            )}

            {/* Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="prose prose-lg dark:prose-invert max-w-none mb-12"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Details
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  {newsItem.description}
                </p>
                
                {/* Additional content based on category */}
                {newsItem.category === 'Achievement' && (
                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border border-blue-200 dark:border-blue-800">
                    <h3 className="text-xl font-bold mb-3 text-blue-900 dark:text-blue-100">
                      🏆 Achievement Highlights
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      This achievement represents significant progress in my professional journey,
                      showcasing dedication to excellence in engineering and innovation.
                    </p>
                  </div>
                )}

                {newsItem.category === 'Career' && (
                  <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-xl border border-green-200 dark:border-green-800">
                    <h3 className="text-xl font-bold mb-3 text-green-900 dark:text-green-100">
                      💼 Career Milestone
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      This career development marks an important step in my professional growth,
                      providing valuable experience in cutting-edge technology and industry practices.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Share Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Share this news</h3>
                  <p className="text-white/80">Help spread the word about this achievement</p>
                </div>
                <Share2 className="w-8 h-8" />
              </div>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-1"
          >
            {/* Quick Info */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 mb-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5 text-blue-600" />
                Quick Info
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Category</p>
                  <p className="font-medium">{newsItem.category}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Published</p>
                  <p className="font-medium">{newsItem.date}</p>
                </div>
                {newsItem.link && (
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">External Link</p>
                    <a
                      href={newsItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Source</span>
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Related News */}
            {relatedNews.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold mb-4">Related News</h3>
                <div className="space-y-4">
                  {relatedNews.map((item) => (
                    <Link
                      key={item.id}
                      href={`/news/${item.id}`}
                      className="block group"
                    >
                      <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                        <p className="font-medium mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}
