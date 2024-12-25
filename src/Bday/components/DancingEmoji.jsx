import { motion } from 'framer-motion';
import { danceAnimations } from '../styles/animations';

const DancingEmoji = ({ emoji, animationType, delay = 0 }) => {
  return (
    <motion.span
      style={{
        display: 'inline-block',
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
        filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))',
        margin: '0 0.5rem',
      }}
      animate={danceAnimations[animationType]}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay,
      }}
    >
      {emoji}
    </motion.span>
  );
};

export default DancingEmoji;