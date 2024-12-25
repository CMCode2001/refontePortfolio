import * as React from "react";
import { motion } from 'framer-motion';
import SkillCard from '../Components/Skills/SkillCard';
import { skillsData } from '../Components/Skills/SkillsData';
// import { Wand2 } from 'lucide-react';

const Skills = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
         
    <div style={{opacity: '1', transform: 'none'}}>
        <div className="pb-2 flex flex-col mt-0 max-lg:mt-0 items-center justify-center text-4xl -rotate-2">
            <div className=" font-bold max-sm:text-2xl text-yellow-600">
            Skills 👨🏻‍💻
            </div>
            <div className="w-40 h-2 bg-yellow-600 rounded-full"></div>
            <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-4"></div>
        </div>
    </div>
          {/* <div className="flex justify-center gap-2">
            <div className="h-1 w-20 bg-green-400 rounded"></div>
            <div className="h-1 w-20 bg-blue-400 rounded"></div>
            <div className="h-1 w-20 bg-purple-400 rounded"></div>
          </div> */}
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={skill.name}
              icon={skill.icon}
              name={skill.name}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;