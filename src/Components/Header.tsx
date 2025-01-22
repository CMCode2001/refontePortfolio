import * as React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LogoCMC from '../Assets/CMC-logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="bgCMC w-full z-50 backdrop-blur-sm">
      <div className="container ">
        <div className="">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <img className='' src={LogoCMC} alt='mon logo' width={200}/>
            
          </motion.div>
        </div>
      </div>
    </header>
  );
};

const NavLinks = () => (
  <>
    {/* <a href="#accueil" className="text-white text-2xl font-semibold hover:text-yellow-100 transition-colors">
      Accueil
    </a>
    <a href="#apropos" className="text-white text-2xl font-semibold hover:text-yellow-100 transition-colors">
      À propos
    </a>
    <a href="#projets" className="text-white text-2xl font-semibold hover:text-yellow-100 transition-colors">
      Projets
    </a>
    <a href="#contact" className="text-white text-2xl font-semibold hover:text-yellow-100 transition-colors">
      Contact
    </a> */}
    {/* <div className="flex space-x-4 sm:hidden ">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        < Github className="text-yellow-600 w-5 h-5" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <Linkedin className="text-yellow-600 w-5 h-5" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <XOutlined className="text-yellow-600 w-5 h-5" />
      </a>
      <a href="mailto:contact@example.com">
        <Mail className="text-yellow-600 w-5 h-5" />
      </a>
    </div> */}
  </>
);

export default Header;