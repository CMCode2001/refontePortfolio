import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, name, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex flex-col items-center p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
    >
      <div className="text-white w-16 h-16 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-white text-lg font-medium">{name}</h3>
    </motion.div>
  );
};

export default SkillCard;