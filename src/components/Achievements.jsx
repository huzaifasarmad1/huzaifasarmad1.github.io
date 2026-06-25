import { motion } from 'framer-motion';
import { FaProjectDiagram, FaRobot, FaBolt } from 'react-icons/fa';
import { achievements } from '../data/portfolioData';
import ParticleCanvas from './ParticleCanvas';

const icons = [FaProjectDiagram, FaRobot, FaBolt];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <ParticleCanvas />

      <div className="section-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-8 md:mb-10"
        >
          <span className="exp-label">Track Record</span>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mt-3">Achievements</h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            Results that speak louder than promises — real projects, real impact.
          </p>
        </motion.div>

        <motion.div
          className="achievements-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {achievements.map((item, index) => {
            const Icon = icons[index] ?? FaProjectDiagram;

            return (
              <motion.article
                key={item.title}
                variants={cardVariants}
                className="achievement-card"
              >
                <div className="achievement-card__top">
                  <span className="achievement-card__highlight">{item.highlight}</span>
                  <span className="achievement-card__icon" aria-hidden="true">
                    <Icon />
                  </span>
                </div>
                <h3 className="achievement-card__title">{item.title}</h3>
                <p className="achievement-card__desc">{item.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
