import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { personalInfo, stats } from '../data/portfolioData';
import GradientOrbs from './GradientOrbs';
import ParticleCanvas from './ParticleCanvas';

export default function About() {
  const socials = [
    { href: personalInfo.linkedin, icon: FaLinkedinIn, label: 'LinkedIn' },
    { href: personalInfo.github, icon: FaGithub, label: 'GitHub' },
    { href: personalInfo.upwork, icon: SiUpwork, label: 'Upwork' },
  ];

  return (
    <section id="about" aria-label="About me" className="section">
      <ParticleCanvas />
      <GradientOrbs />

      <div className="section-inner relative z-10">
        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="about-card"
        >
          <div className="about-card__top">
            <div className="about-card__photo">
              <img
                src="/profile.jpg"
                alt={personalInfo.name}
                className="about-card__avatar"
              />
              <span className="about-card__status">Open to work</span>
            </div>

            <div className="about-card__body">
              <span className="exp-label">About Me</span>
              <h2 className="about-card__title gradient-text">{personalInfo.title}</h2>
              <p className="about-card__bio">{personalInfo.bioIntro}</p>
            </div>
          </div>

          <div className="about-card__bottom">
            <div className="about-card__stats">
              {stats.map((stat) => (
                <div key={stat.label} className="about-card__stat">
                  <span className="about-card__stat-value">{stat.value}</span>
                  <span className="about-card__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="about-card__actions">
              <a href="#contact" className="about-card__btn about-card__btn--fill">
                Get in Touch
              </a>

              <div className="about-card__socials">
                {socials.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="about-card__social"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
