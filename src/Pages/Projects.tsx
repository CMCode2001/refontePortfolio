import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Une plateforme e-commerce moderne avec panier et paiement",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Task Manager",
      description: "Application de gestion de tâches avec React et Node.js",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Blog Platform",
      description: "Plateforme de blog avec système de gestion de contenu",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80",
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <section id="projets" className="py-10">
      <div className="container mx-auto px-4">
      <div style={{opacity: '1', transform: 'none'}}>
        <div className="pb-6 flex flex-col mt-0 max-lg:mt-0 items-center justify-center text-4xl -rotate-2">
            <div className=" font-bold max-sm:text-2xl text-yellow-600">
            Projects 🗂️
            </div>
            <div className="w-40 h-2 bg-yellow-600 rounded-full"></div>
            <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-4"></div>
            {/* <p className="text-xl text-gray-100">Découvrez mes dernières réalisations</p> */}

        </div>
    </div>
       

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;