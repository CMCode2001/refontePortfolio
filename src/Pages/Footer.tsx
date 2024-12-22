import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import LogoCMC from '../Assets/CMC-logo.png'

const Footer = () => {
  return (
    <footer className="bgFooter text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">
            <img src={LogoCMC} alt="LogoCMC" width={100} />
          </div>
          
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a href="#accueil" className="hover:text-yellow-200 transition-colors">Accueil</a>
            <a href="#apropos" className="hover:text-yellow-200 transition-colors">À propos</a>
            <a href="#projets" className="hover:text-yellow-200 transition-colors">Projets</a>
            <a href="#contact" className="hover:text-yellow-200 transition-colors">Contact</a>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:contact@example.com" className="hover:text-yellow-200 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-4 pt-0 text-center text-white">
          <p className='text-yellow-600 font-bold'>─── ⋆⋅☆⋅⋆ ───</p>
          <p className="text-yellow-600"> &copy; Designed by CMC </p>
          {/* <p> &copy;{new Date().getFullYear()} Tous droits réservés.</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;