import * as React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    
    {
      title: "Site Web L2i",
      description:
        "Conception et Développement du site  L2i: Licence en Ingenierie Informatique , mettant en avant les cours en ligne,un espace de forums, chat en direct, et un espace professeur pour administrer les classes: gestion des notes, programmation de devoir, ajout des cours...",
      video: "/img/site-l2i.mp4",
      github: "https://github.com/CMCode2001/Portail-Web-L2i",
      demo: "https://demo.com",
    },
    {
      title: "Portail Web UASZ",
      description:
        "Refonte complète du portail web de l'UASZ avec Angular et Spring Boot pour une meilleure expérience utilisateur et un accès optimisé aux ressources académiques. Toujours en phase de developement...",
      video: "/img/Portail Web UASZ.mp4",
      github: "https://github.com/CMCode2001/Portail-Web-UASZ-/tree/CMC",
      demo: "https://demo.com",
    },
    {
      title: "Sama Bess",
      description:
        "Une application de gestion événementielle permettant d’organiser et de suivre les événements avec une interface utilisateur intuitive.",
      video: "/img/samabess.mp4",
      github: "https://github.com/CMCode2001/evens_manager-frontend-CMC/tree/frontend-final",
      demo: "https://demo.com",
    },
    // {
    //   title: "Gestion de couverture des événements de l'UASZ",
    //   description:
    //     "Plateforme dédiée à la gestion et à la planification de la couverture médiatique des événements universitaires.",
    //   video: "/videos/couverture-uasz.mp4",
    //   github: "https://github.com",
    //   demo: "https://demo.com",
    // },
  ];

  return (
    <section id="projets" className="bg-black py-10">
      <div className="container mx-auto px-4">
        <div style={{ opacity: "1", transform: "none" }}>
          <div className="pb-6 flex flex-col mt-0 max-lg:mt-0 items-center justify-center text-4xl -rotate-2">
            <div className="font-bold max-sm:text-2xl text-yellow-600">
              Projects 🗂️
            </div>
            <div className="w-40 h-2 bg-yellow-600 rounded-full"></div>
            <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-4"></div>
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
              <video
                src={project.video}
                controls
                className="w-full h-48 object-cover"
              ></video>
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
