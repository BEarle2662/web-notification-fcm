import { motion } from 'framer-motion';

function ParallaxText({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 50,
        delay,
      }}
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.div>
  );
}

export default ParallaxText;