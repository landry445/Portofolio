import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Home: React.FC = () => {
  const refFour = useRef<HTMLDivElement>(null);
  const isInViewFour = useInView(refFour, { once: false, margin: "0px 10px -10px 0px" });
  const refFourH = useRef<HTMLDivElement>(null);
  const isInViewFourH = useInView(refFourH, { once: false, margin: "0px 10px -10px 0px" });
  const refContact = useRef<HTMLDivElement>(null);
  const isInViewContact = useInView(refContact, { once: false, margin: "0px 10px -10px 0px" });

  const themeStyle = {
    textColor: "text-blue-500", // Exemple
    textTertiary: "text-gray-300" // Exemple
  };

  // const iconStyle = { width: 20, height: 20, fill: "#000" };

  return (
    <div className="min-h-screen">
      {/* Partie 1 : Contenu principal */}
      <div className="relative flex flex-col-reverse items-center justify-center md:flex-row lg:justify-around">
        <div className="flex flex-col justify-center items-center md:items-start mx-5 md:mx-0 md:me-5 mt-5 md:mt-0">
          <div className="relative flex flex-col items-center md:mb-5">
            <motion.div
              ref={refFour}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInViewFour ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
            >
              <h1 className={`mt-2 md:mt-7 text-center text-opacity-90 ${themeStyle.textColor}`}>
                <span className="font-bold text-[35px] sm:text-[38px] md:text-[32px] lg:text-[34px] xl:text-[48px] tracking-[1px] custom-font-secondary">
                  Jérôme Tissot
                </span>
              </h1>
            </motion.div>
            <motion.div
              ref={refFourH}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInViewFourH ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
            >
              <h2 className={`mt-2 text-center font-bold text-[40px] sm:text-[44px] md:text-[42px] lg:text-[44px] xl:text-[54px] tracking-[1.5px] leading-9 lg:leading-none ${themeStyle.textTertiary}`}>
                <span>
                  DEVELOPPEUR<br /> FULLSTACK
                </span>
              </h2>
            </motion.div>
            <motion.div
              className="w-full flex justify-between mt-[60px] md:mt-10 lg:mt-20"
              ref={refContact}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInViewContact ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0, 0.71, 0.2, 1.01] }}
            >
              {/* Remplacez ContactWrap par des éléments simples pour tester */}
              <div>GitHub</div>
              <div>Linkedin</div>
              <div>Mailto</div>
            </motion.div>
          </div>
        </div>
        {/* Partie 2 : Autre contenu éventuel */}
        <div className="mb-2 h-64 md:h-fit md:mb-0 md:mt-0">
          {/* ... autre contenu ou image ... */}
          <p>Autre contenu ici</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
