'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Github, ExternalLink, Play, Calendar, Tag, Award, Sparkles } from 'lucide-react';
import { projects } from '@/data/projects';
import { use } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = projects.find(p => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-blue-100/30 dark:from-black dark:via-blue-950/30 dark:to-blue-900/20 relative overflow-hidden py-12">
      <AnimatedBackground />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to Projects</span>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-800 dark:to-blue-950/30 rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-200 dark:border-gray-700">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {project.featured && (
                <span className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold rounded-full shadow-lg">
                  <Award className="w-4 h-4" />
                  Featured Project
                </span>
              )}
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full border border-blue-200 dark:border-blue-800">
                <Tag className="w-4 h-4 inline mr-1" />
                {project.category}
              </span>
              {project.date && (
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  {project.date}
                </span>
              )}
            </div>

            {/* Title & Summary */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              {project.title}
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              {project.summary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.githubLink && (
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Github className="w-5 h-5" />
                  <span>View Source Code</span>
                </motion.a>
              )}
              {project.externalLink && (
                <motion.a
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </motion.a>
              )}
              {project.videoLink && (
                <motion.a
                  href={project.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Play className="w-5 h-5" />
                  <span>Watch Video</span>
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images & Description */}
          <div className="lg:col-span-2 space-y-8">
            {/* Images Gallery */}
            {project.images.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  Project Gallery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.images.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.03 }}
                      className="relative h-64 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-lg group cursor-pointer"
                    >
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                About This Project
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                {project.description.split('\n\n').map((paragraph, index) => {
                  // Check if paragraph starts with ## (heading)
                  if (paragraph.trim().startsWith('## ')) {
                    return (
                      <h3 key={index} className="text-2xl font-bold mt-6 mb-4 text-gray-900 dark:text-gray-100">
                        {paragraph.replace('## ', '')}
                      </h3>
                    );
                  }
                  // Check if paragraph starts with ### (subheading)
                  if (paragraph.trim().startsWith('### ')) {
                    return (
                      <h4 key={index} className="text-xl font-semibold mt-4 mb-3 text-gray-800 dark:text-gray-200">
                        {paragraph.replace('### ', '')}
                      </h4>
                    );
                  }
                  // Check if paragraph starts with - (bullet point)
                  if (paragraph.trim().startsWith('- ')) {
                    const items = paragraph.split('\n').filter(line => line.trim().startsWith('- '));
                    return (
                      <ul key={index} className="list-disc list-inside space-y-2 my-4">
                        {items.map((item, i) => (
                          <li key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {item.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  // Regular paragraph
                  return (
                    <p key={index} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Tech Stack & Meta */}
          <div className="space-y-6">
            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 sticky top-24"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-2 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium border border-blue-200 dark:border-blue-800 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Project Stats */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Category</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">{project.category}</span>
                  </div>
                  {project.date && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Timeline</span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">{project.date}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Technologies</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">{project.techStack.length}</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              {(project.githubLink || project.externalLink || project.videoLink) && (
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">Quick Links</h4>
                  <div className="space-y-2">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.externalLink && (
                      <a
                        href={project.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.videoLink && (
                      <a
                        href={project.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <Play className="w-4 h-4" />
                        <span>Video Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Related Projects Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-4 transition-all font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Explore More Projects</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
