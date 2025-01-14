import * as React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LogoCMC from '../Assets/CMC-logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed w-full z-50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center mr-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            
          >
            <img className='mr-8' src={LogoCMC} alt='mon logo' width={100}/>
            
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 mr-10 ">
            <NavLinks />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} style={{color:"#fdedb1"}}/> : <Menu size={30} style={{color:"#fdedb1"}} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bgCMC"
        >
          <div className="px-4 py-4 space-x-4">
            <NavLinks />
          </div>
        </motion.div>
      )}
    </header>
  );
};

const NavLinks = () => (
  <>
    <a href="#accueil" className="text-white text-2xl font-semibold hover:text-yellow-100 transition-colors">
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
    </a>
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