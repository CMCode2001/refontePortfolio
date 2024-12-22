import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Rocket } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Code2 className="w-6 h-6" />, title: 'Développement', description: 'React, Angular, TypeScript, Java Spring-boot, Django, Git, Shell.... ' },
    { icon: <Palette className="w-6 h-6" />, title: 'Design', description: 'UI/UX, Figma, Tailwind CSS, Photoshop, Illustrator...' },
    { icon: <Rocket className="w-6 h-6" />, title: 'Performance', description: 'Optimisation, SEO' },
  ];

  return (
    // <section id="apropos" className="top-0 ">
    <div className="container mx-auto px-4 top-0">
      <div className="py-2 p-5 sm:p-0 top-0" id="apropos">
    <div style={{opacity: '1', transform: 'none'}}>
        <div className="pb-2 flex flex-col mt-0 max-lg:mt-0 items-center justify-center text-4xl -rotate-2">
            <div className=" font-bold max-sm:text-2xl text-yellow-600">
             À propos de moi 🌱
            </div>
            <div className="w-40 h-2 bg-yellow-600 rounded-full"></div>
            <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-4"></div>
        </div>
    </div>
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className=" -rotate-3 text-4xl text-yellow-600 font-bold mb-4">À propos de moi</h2>
          <div className="w-40 h-2 bg-green-500 rounded-full"></div>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Passionné par le développement web, je crée des solutions innovantes
            qui combinent performance et expérience utilisateur exceptionnelle.
          </p>
        </motion.div> */}

        <div className="grid md:grid-cols-3 gap-8 pt-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    // </section>
  );
};

export default About;