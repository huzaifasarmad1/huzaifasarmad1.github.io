import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCode,
  FaServer,
  FaDesktop,
  FaMobileAlt,
  FaDatabase,
  FaPlug,
  FaCogs,
  FaCloud,
  FaDocker,
} from 'react-icons/fa';
import { skillCategories } from '../data/portfolioData';
import { SkillIcon } from '../utils/skillIcons';
import ParticleCanvas from './ParticleCanvas';

const categoryIcons = {
  Languages: FaCode,
  'Backend & Frameworks': FaServer,
  Frontend: FaDesktop,
  'Mobile (Cross-Platform)': FaMobileAlt,
  Databases: FaDatabase,
  'Third-Party Integrations': FaPlug,
  'Automation & Testing': FaCogs,
  'Cloud & Deployment': FaCloud,
  Containerization: FaDocker,
};

const panelVariants = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: 'easeOut', staggerChildren: 0.04 },
  },
  exit: { opacity: 0, x: -16, transition: { duration: 0.2 } },
};

const tileVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = skillCategories[activeIndex];
  const ActiveIcon = categoryIcons[activeCategory.title] ?? FaCode;

  return (
    <section id="skills" className="section">
      <ParticleCanvas />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />
      </div>

      <div className="section-inner relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-10"
        >
          <span className="exp-label">Tech Stack & Expertise</span>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mt-3">Skills</h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            Explore my toolkit by category — from core languages to cloud and automation.
          </p>
        </motion.div>

        <div className="skills-panel">
          {/* Category navigation */}
          <nav className="skills-nav" aria-label="Skill categories">
            <div className="skills-nav__scroll">
              {skillCategories.map((category, index) => {
                const Icon = categoryIcons[category.title] ?? FaCode;
                const isActive = index === activeIndex;

                return (
                  <button
                    key={category.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`skills-nav__item ${isActive ? 'skills-nav__item--active' : ''}`}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    <span className="skills-nav__icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <span className="skills-nav__text">
                      <span className="skills-nav__title">{category.title}</span>
                      <span className="skills-nav__count">{category.skills.length} tools</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Active category showcase */}
          <div className="skills-showcase">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.title}
                variants={panelVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="skills-showcase__inner"
              >
                <div className="skills-showcase__header">
                  <span className="skills-showcase__badge" aria-hidden="true">
                    <ActiveIcon />
                  </span>
                  <div>
                    <h3 className="skills-showcase__title">{activeCategory.title}</h3>
                    <p className="skills-showcase__subtitle">
                      {activeCategory.skills.length} technologies in this stack
                    </p>
                  </div>
                </div>

                <div className="skills-tile-grid">
                  {activeCategory.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={tileVariants}
                      className="skill-tile group"
                      title={skill}
                    >
                      <span className="skill-tile__glow" aria-hidden="true" />
                      <span className="skill-tile__icon">
                        <SkillIcon name={skill} className="text-3xl sm:text-4xl" />
                      </span>
                      <span className="skill-tile__label">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
