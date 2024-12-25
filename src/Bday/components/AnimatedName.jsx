import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { gradients } from '../styles/colors';

function AnimatedName() {
  const [currentName, setCurrentName] = useState('SATISH');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentName(prev => prev === 'SATISH' ? 'SATHI MAAYA' : 'SATISH');
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="name-container">
      <AnimatePresence mode="wait">
        <motion.h2
          key={currentName}
          initial={{ y: 20, opacity: 0, scale: 0.8 }}
          animate={{ 
            y: 0, 
            opacity: 1,
            scale: 1,
            // background: currentName === 'SATISH' 
            //   ? gradients.nameGradient1
            //   : gradients.nameGradient2,
          }}
          exit={{ y: -20, opacity: 0, scale: 0.8 }}
          transition={{ 
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          style={{
            display: 'inline-block',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'rgba(0,0,0,0.7)',
            fontSize: 'clamp(2rem, 6vw, 3rem)',
            fontWeight: 800,
            margin: 0,
            letterSpacing: '2px',
            filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))',
          }}
        >
          {currentName}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}

export default AnimatedName;