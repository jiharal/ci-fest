import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, AlertCircle, CheckCircle2, Lightbulb, Target, TrendingUp, ArrowRight } from 'lucide-react';
const colors = {
  primary: "#00B4D8",
  secondary: "#02D394",
  accent: "#5B4DFF",
  background: "#F8FAFC",
  white: "#FFFFFF",
  text: "#1E293B"
};
import { BookOpen } from 'lucide-react';

const ReferenceItem = ({ title, author, year, link = null }) => (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start gap-4">
        <BookOpen className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-semibold text-lg text-slate-800 mb-2">{title}</h3>
          <p className="text-slate-600">{author}</p>
          <p className="text-slate-500 text-sm">{year}</p>
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 text-sm mt-2 inline-block"
            >
              View Resource →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );

const TLabLogo = () => (
    <svg className="w-24 h-24 md:w-32 md:h-32" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: colors.primary}} />
          <stop offset="100%" style={{stopColor: "#0096C7"}} />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: colors.secondary}} />
          <stop offset="100%" style={{stopColor: "#00B47C"}} />
        </linearGradient>
      </defs>
      <path d="M70 30 Q85 30 85 45 L85 70 Q85 85 70 85 L45 85 Q30 85 30 70 L30 45 Q30 30 45 30 Z" 
            fill="url(#gradient1)" />
      <path d="M55 15 Q70 15 70 30 L70 55 Q70 70 55 70 L30 70 Q15 70 15 55 L15 30 Q15 15 30 15 Z" 
            fill="url(#gradient2)" opacity="0.9" />
    </svg>
  );

// Wrap each slide content in motion.div for animations
const slideVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Slide = ({ id, children, gradient = false }) => (
  <section id={id} className={`
    min-h-screen 
    relative 
    overflow-hidden
    ${gradient ? 'bg-gradient-to-br from-blue-50/50 to-green-50/50' : 'bg-white'}
  `}>
    {/* Decorative background elements */}
    <div className="absolute inset-0 z-0">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/30 rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-green-50/30 rounded-tr-full" />
    </div>
    
    {/* Main content */}
    <div className="relative z-10 container mx-auto px-6 md:px-12 py-24 flex items-center min-h-screen">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={slideVariants}
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  </section>
);

export default function Presentation() {
  return (
    <div className="relative">
      {/* Title Slide */}
      <Slide id="title" gradient>
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            className="mb-12"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <TLabLogo className="w-32 h-32 mx-auto" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
          Developing Standardized Libraries to Boost Developer Productivity
          </h1>
          <p className="text-2xl md:text-3xl text-slate-600 mb-6">
          Reducing Timelines from Days to Hours
          </p>
          <div className="text-xl text-slate-500 space-y-2">
            <p>Jihar Al Gifari</p>
            <p>Backend Engineer</p>
          </div>
        </div>
      </Slide>

      {/* Problem Statement Slide */}
      <Slide id="problem">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{color: colors.primary}}>
            Current Challenges
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column: Stats */}
            <div className="space-y-6">
              {[
                { label: 'Setup Time', value: '7 days', icon: AlertCircle },
                { label: 'Manual Tasks', value: '80%', icon: TrendingUp },
                { label: 'Code Duplication', value: '65%', icon: AlertCircle }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4"
                >
                  <stat.icon className="w-8 h-8 text-blue-500" />
                  <div>
                    <p className="text-slate-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Right Column: Pain Points */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Key Pain Points</h3>
              <div className="space-y-4">
                {[
                  'Inconsistent implementations',
                  'High maintenance overhead',
                  'Extended project timelines',
                  'Resource underutilization'
                ].map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-center space-x-3"
                  >
                    <ArrowRight className="w-5 h-5 text-red-500" />
                    <p className="text-slate-700">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* Solution Slide */}
      <Slide id="solution" gradient>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{color: colors.primary}}>
            Our Solution
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'goacl',
                desc: 'Access Control Layer',
                reduction: '92%',
                features: ['Role Management', 'Policy Integration', 'Feature Control']
              },
              {
                name: 'godb',
                desc: 'Database Operations',
                reduction: '85%',
                features: ['Connection Pool', 'Query Builder', 'Migration Tools']
              },
              {
                name: 'goresponse',
                desc: 'Response Handler',
                reduction: '88%',
                features: ['Standard Format', 'Error Handling', 'Status Codes']
              },
              {
                name: 'gohelper',
                desc: 'Utility Functions',
                reduction: '90%',
                features: ['Encryption', 'Validation', 'Common Utils']
              }
            ].map((lib, i) => (
              <motion.div
                key={i}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="h-full flex flex-col">
                  <h3 className="text-2xl font-bold mb-2" style={{color: colors.primary}}>
                    {lib.name}
                  </h3>
                  <p className="text-slate-600 mb-4">{lib.desc}</p>
                  <div className="mb-4">
                    <span className="text-green-500 font-bold text-xl">
                      {lib.reduction} faster
                    </span>
                  </div>
                  <ul className="space-y-2 mt-auto">
                    {lib.features.map((feature, j) => (
                      <li key={j} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Slide>

      {/* Impact Slide */}
      <Slide id="impact">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{color: colors.primary}}>
            Measurable Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Time Savings',
                value: '92.85%',
                desc: 'Reduction in setup time',
                icon: CheckCircle2,
                color: colors.primary
              },
              {
                title: 'Code Quality',
                value: '80%',
                desc: 'Improvement in consistency',
                icon: Lightbulb,
                color: colors.secondary
              },
              {
                title: 'Innovation',
                value: '350%',
                desc: 'Increase in innovation time',
                icon: TrendingUp,
                color: colors.accent
              }
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <metric.icon className="w-12 h-12 mx-auto mb-4" style={{color: metric.color}} />
                <h3 className="text-xl font-semibold mb-2">{metric.title}</h3>
                <p className="text-4xl font-bold mb-2" style={{color: metric.color}}>
                  {metric.value}
                </p>
                <p className="text-slate-600">{metric.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Slide>

      {/* Implementation Roadmap */}
      <Slide id="roadmap" gradient>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{color: colors.primary}}>
            Implementation Roadmap
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                phase: 'Phase 1: Foundation',
                timeframe: '0-3 months',
                items: [
                  'Library integration in new projects',
                  'Team training programs',
                  'Documentation completion',
                  'Initial feedback collection'
                ],
                color: colors.primary
              },
              {
                phase: 'Phase 2: Expansion',
                timeframe: '3-6 months',
                items: [
                  'Feature enhancement',
                  'Performance optimization',
                  'Community feedback',
                  'Extended documentation'
                ],
                color: colors.secondary
              }
            ].map((phase, i) => (
              <motion.div
                key={i}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h3 className="text-2xl font-bold mb-2" style={{color: phase.color}}>
                  {phase.phase}
                </h3>
                <p className="text-slate-500 mb-6">{phase.timeframe}</p>
                <ul className="space-y-4">
                  {phase.items.map((item, j) => (
                    <motion.li
                      key={j}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: j * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 rounded-full" style={{backgroundColor: phase.color}} />
                      <span className="text-slate-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Slide>

      <Slide id="references" gradient>
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{color: colors.primary}}>
        References
      </h2>
      
      <div className="grid gap-6">
        <ReferenceItem
          title="Refactoring: Improving the Design of Existing Code (2nd Edition)"
          author="Fowler, M."
          year="2019"
        />

        <ReferenceItem
          title="The Go Programming Language Specification"
          author="Team, Go."
          year="2023"
        />

        <ReferenceItem
          title="Best Practices for Library Development in Go"
          author="Anthropic"
          year="2024"
          link="https://blog.golang.org/library-best-practices"
        />

        <ReferenceItem
          title="Casbin: An authorization library that supports access control models"
          author="Casbin Documentation"
          year="2024"
          link="https://casbin.org/docs/get-started"
        />

        <ReferenceItem
          title="Internal Technical Documentation and Standards"
          author="PT Teknologi Kode Indonesia"
          year="2024"
        />
      </div>
    </div>
  </Slide>
    </div>
  );
}