import React from 'react'

import { 
  Code2, 
  Database, 
  GitBranchPlus, 
  Palette,
  Blocks,
  FileJson,
  Wind
} from 'lucide-react';
import { FaJava, FaReact } from 'react-icons/fa';
import { SiAdobeillustrator, SiAngular, SiSpring, SiSpringboot } from 'react-icons/si';

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
    name: 'Adobe Illustrator',
    icon: <SiAdobeillustrator className="w-12 h-12" />,
  },
  {
    name: 'Java Spring-boot',
    icon: < SiSpring className="w-12 h-12" />,
  },
  {
    name: 'Mysql, Mariadb',
    icon: <Database className="w-12 h-12" />,
  },
  {
    name: 'Git',
    icon: <GitBranchPlus className="w-12 h-12" />,
  },
  // {
  //   name: 'JavaScript',
  //   icon: <Code2 className="w-12 h-12" />,
  // },
];