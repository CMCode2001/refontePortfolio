import { motion } from 'framer-motion';
import { DownloadCloudIcon, Github, Linkedin, Mail } from 'lucide-react';
import * as React from "react";
import LogoCMC from '../Assets/CMC-photo-d-identite.jpg';
import SVG from '../Assets/programming-animate.svg';
import { XOutlined } from '@ant-design/icons';
import GradualSpacing from "@/Components/components/ui/gradual-spacing";
import { DockStyler } from '@/Components/DockStyler';


const Accueil = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center pt-30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-0 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='m-4'
          >
            
            <h1 className="text-white text-3xl lg:text-5xl font-bold pt-0 max-lg:pt-20 max-sm:text-[1.7rem] -rotate-2 ">
              Salut👋🏾,
              <br/>           
                je suis&nbsp;
                <span className="underline underline-offset-8 text-yellow-600">Cheikh Mbacké COLY.</span>
            </h1>
            <br/>
  
            <p className="text-xl text-slate-200 mb-8 pt-6">
              Un développeur Fullstack Junior passionné par la construction <br/>d'interfaces utilisateurs et d'applications web modernes. <br/>
              Je crée des expériences web innovantes et performantes
            </p>
            <motion.a
              href="/Mon CV (cmc).pdf"
              // download="Mon CV.pdf"
              className="inline-flex items-center px-6 py-3 bg-yellow-600 text-black font-bold rounded-3xl transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              target='_blank'
            >
              Download CV
              <DownloadCloudIcon className="ml-2 w-5 h-5" />
            </motion.a>
          
          <div className="flex space-x-6 pt-6 m-1">
            {/* <DockStyler/> */}
            <a href="https://github.com/CMCode2001/" target="_blank" rel="noopener noreferrer">
              < Github className="text-yellow-600 w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/cheikh-mback%C3%A9-coly-26047127b/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-yellow-600 w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <XOutlined className="text-yellow-600 w-5 h-5" />
            </a>
            <a href="mailto:cheikh.mc2024@gmail.com">
              <Mail className="text-yellow-600 w-5 h-5" />
            </a>
          </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto left-20 hidden sm:block"
          >
            <img
              src={LogoCMC}
              alt="CMC"
              className="modifPhoto shadow-4xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className=" mx-auto left-20 sm:hidden"
          >
            <img src={SVG} alt="SVG" width={300}/>
            
          </motion.div>
          

        </div>
      </div>
      
    </section>
  );
};

export default Accueil;