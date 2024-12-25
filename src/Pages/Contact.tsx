import * as React from "react";
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div style={{opacity: '1', transform: 'none'}}>
        <div className="pb-6 flex flex-col mt-0 max-lg:mt-0 items-center justify-center text-4xl -rotate-2">
            <div className=" font-bold max-sm:text-2xl text-yellow-600">
              Contacts 📩
            </div>
            <div className="w-40 h-2 bg-yellow-600 rounded-full"></div>
            <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-4"></div>
            {/* <p className="text-xl text-gray-100">Découvrez mes dernières réalisations</p> */}

        </div>
        <div className="flex flex-col items-center justify-center space-y-5 md:flex-row md:space-x-5 md:space-y-0 md:grid-cols-2">
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
          >
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-yellow-600" />
              <div>
                <h4 className="font-bold text-white">Email</h4>
                <p className="text-white">
                  <a href="mailto:cheikh.mc2024@gmail.com">
                    cheikh.mc2024@gmail.com
                  </a>
                </p>
              </div>
            </div> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-yellow-600" />
              <div>
                <h4 className="font-bold text-white">Téléphone</h4>
                <p className="text-white">
                    <a href="tel:+221771660823" className="hover:none">
                      +221 77 166 08 23
                    </a>{" "}
                    /{" "}
                    <a href="tel:+221764243926" className="hover:none">
                      +221 76 424 39 26
                    </a>
                </p>
              </div>
            </div> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-yellow-600" />
              <div>
                <h4 className="font-bold text-white">Localisation</h4>
                <p className="text-white">Dakar-Thies, Sénégal</p>
              </div>
            </div>
          </motion.div>
        
        </div>
        
      </div>
      </div>
    </section>
  );
};

export default Contact;