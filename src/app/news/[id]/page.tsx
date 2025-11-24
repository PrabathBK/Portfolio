'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, ExternalLink, Tag, Share2 } from 'lucide-react';
import { news } from '@/data/cv';
import { use } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const newsItem = news.find(n => n.id === id);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-blue-100/30 dark:from-black dark:via-blue-950/30 dark:to-blue-900/20 relative overflow-hidden py-12">
      <AnimatedBackground />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to News</span>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full border border-blue-200 dark:border-blue-800">
              {newsItem.category}
            </span>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>{newsItem.date}</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            {newsItem.title}
          </h1>
        </motion.div>

        {/* Featured Image */}
        {newsItem.image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src={newsItem.image}
              alt={newsItem.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        )}

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-800"
        >
          <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed">
            <p className="text-xl text-gray-800 dark:text-gray-200 font-medium mb-8">
              {newsItem.description}
            </p>
            {/* Additional content would go here if available in data */}
          </div>

          {/* External Link Action */}
          {newsItem.link && (
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <a
                href={newsItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Read Full Story</span>
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
