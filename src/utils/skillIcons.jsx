import { FaAws } from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiAngular,
  SiIonic,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiDjango,
  SiRedux,
  SiHtml5,
  SiCss,
  SiSass,
  SiMui,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiAntdesign,
  SiFlutter,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiFirebase,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiSocket,
  SiTwilio,
  SiStripe,
  SiPostman,
  SiSwagger,
  SiZapier,
  SiGit,
  SiN8N,
  SiMake,
  SiProgress,
  SiOpenid,
  SiServerless,
} from 'react-icons/si';

function GoHighLevelIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm2.5 5.5h2.2l1.3 3.4 1.3-3.4H13l-2.4 5.8V18h-2.1v-2.7L6.5 9.5zm8.2 0h2.1V18h-2.1V9.5z" />
    </svg>
  );
}

function HtmlCssSassIcon({ className }) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className ?? ''}`}>
      <SiHtml5 className="text-[0.85em]" aria-hidden="true" />
      <SiCss className="text-[0.85em]" aria-hidden="true" />
      <SiSass className="text-[0.85em]" aria-hidden="true" />
    </span>
  );
}

const iconMap = {
  // Languages
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,

  // Backend & Frameworks
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  NestJS: SiNestjs,
  Django: SiDjango,

  // Frontend
  Angular: SiAngular,
  'React.js': SiReact,
  'Next.js': SiNextdotjs,
  Redux: SiRedux,
  'HTML/CSS/SASS': HtmlCssSassIcon,
  'Material UI': SiMui,
  'Tailwind CSS': SiTailwindcss,
  'Kendo UI': SiProgress,
  'Ant Design': SiAntdesign,
  Bootstrap: SiBootstrap,
  jQuery: SiJquery,

  // Mobile
  'React Native': TbBrandReactNative,
  'Ionic.js': SiIonic,
  Flutter: SiFlutter,

  // Databases
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Redis: SiRedis,

  // Third-Party Integrations
  WebSockets: SiSocket,
  Twilio: SiTwilio,
  Stripe: SiStripe,
  Firebase: SiFirebase,
  OAuth: SiOpenid,

  // Automation & Testing
  'Git Flow & CI/CD': SiGit,
  Postman: SiPostman,
  'Swagger/OpenAPI': SiSwagger,
  GoHighLevel: GoHighLevelIcon,
  n8n: SiN8N,
  Make: SiMake,
  Zapier: SiZapier,

  // Cloud & Deployment
  AWS: FaAws,
  'AWS Serverless/SAM': SiServerless,
  GCP: SiGooglecloud,

  // Containerization
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
};

export function SkillIcon({ name, className = 'text-xl' }) {
  const Icon = iconMap[name];
  if (!Icon) return <span className={className} title={name}>⚡</span>;
  return <Icon className={className} />;
}
