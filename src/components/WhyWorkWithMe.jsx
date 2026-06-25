import { motion } from 'framer-motion';
import { FaRocket, FaRobot, FaBolt, FaComments, FaShieldAlt } from 'react-icons/fa';
import { whyWorkWithMe, whyWorkHighlight } from '../data/portfolioData';
import GradientOrbs from './GradientOrbs';
import ParticleCanvas from './ParticleCanvas';

const icons = [FaRocket, FaRobot, FaBolt, FaComments, FaShieldAlt];

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function WhyWorkWithMe() {
  return (
    <section id="why-me" className="section">
      <ParticleCanvas />
      <GradientOrbs />

      <div className="section-inner relative z-10">
        <div className="why-me-split">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="why-me-split__intro"
          >
            <span className="exp-label">What You Get</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 leading-tight">
              Why Work
              <span className="gradient-text block">With Me?</span>
            </h2>
            <p className="mt-5 text-gray-400 text-base sm:text-lg leading-relaxed max-w-md">
              Partner with someone who ships quality code, builds AI-powered automations, and keeps you in the loop every step of the way.
            </p>

            <div className="why-me-highlight">
              <span className="why-me-highlight__icon" aria-hidden="true">
                <FaRobot />
              </span>
              <div>
                <span className="why-me-highlight__title">{whyWorkHighlight.title}</span>
                <p className="why-me-highlight__text">{whyWorkHighlight.text}</p>
              </div>
            </div>
          </motion.div>

          <motion.ol
            className="why-me-timeline"
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
          >
            {whyWorkWithMe.map((point, index) => {
              const Icon = icons[index] ?? FaRocket;

              return (
                <motion.li
                  key={point}
                  variants={itemVariants}
                  className="why-me-timeline__item"
                >
                  <div className="why-me-timeline__track" aria-hidden="true">
                    <span className="why-me-timeline__dot">
                      <Icon />
                    </span>
                    {index < whyWorkWithMe.length - 1 && (
                      <span className="why-me-timeline__line" />
                    )}
                  </div>

                  <div className="why-me-timeline__content">
                    <span className="why-me-timeline__index">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="why-me-timeline__text">{point}</p>
                  </div>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
