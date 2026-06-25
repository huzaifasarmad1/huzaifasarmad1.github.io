import { FaAws } from 'react-icons/fa';
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
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiFirebase,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiNginx,
  SiJenkins,
  SiApachekafka,
  SiSocketdotio,
} from 'react-icons/si';

const iconMap = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Python: SiPython,
  React: SiReact,
  'Next.js': SiNextdotjs,
  Angular: SiAngular,
  'React Native': SiReact,
  Ionic: SiIonic,
  'Node.js': SiNodedotjs,
  'NestJS': SiNestjs,
  'Express.js': SiExpress,
  GraphQL: SiGraphql,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  Firebase: SiFirebase,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  AWS: FaAws,
  GCP: SiGooglecloud,
  Nginx: SiNginx,
  Jenkins: SiJenkins,
  'Apache Kafka': SiApachekafka,
  WebSockets: SiSocketdotio,
};

export function SkillIcon({ name, className = 'text-6xl' }) {
  const Icon = iconMap[name];
  if (!Icon) return <span className={className}>⚡</span>;
  return <Icon className={className} />;
}
