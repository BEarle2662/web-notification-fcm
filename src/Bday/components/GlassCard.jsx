import { motion } from 'framer-motion';

function GlassCard({ children }) {
  return (
    <motion.div
      className="glass-card"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
}

export default GlassCard;