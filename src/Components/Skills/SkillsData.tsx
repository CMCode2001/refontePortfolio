import * as React from "react";

import { 
  Code2, 
  Database, 
  GitBranchPlus, 
  Palette,
  Blocks,
  FileJson,
  Wind
} from 'lucide-react';
import { FaGithubAlt, FaReact } from 'react-icons/fa';
import { SiAdobeillustrator, SiAngular, SiGithub, SiSpring } from 'react-icons/si';
import { GithubFilled } from "@ant-design/icons";

export const skillsData = [
  {
    name: 'React.js',
    icon: <FaReact className="w-12 h-12" />,
  },
  {
    name: 'Angular.js',
    icon: <SiAngular className="w-12 h-12" />,
  },
  {
    name: 'TypeScript',
    icon: <FileJson className="w-12 h-12" />,
  },
  {
    name: 'Tailwind',
    icon: <Palette className="w-12 h-12" />,
  },
  {
    name: 'Ai',
    icon: <SiAdobeillustrator className="w-12 h-12" />,
  },
  {
    name: 'Spring-boot',
    icon: < SiSpring className="w-12 h-12" />,
  },
  {
    name: 'Mysql-Mariadb',
    icon: <Database className="w-12 h-12" />,
  },
  {
    name: 'Github',
    icon: <SiGithub className="w-12 h-12" />,
  },
  // {
  //   name: 'JavaScript',
  //   icon: <Code2 className="w-12 h-12" />,
  // },
];