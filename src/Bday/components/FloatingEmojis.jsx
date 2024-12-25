import { motion } from 'framer-motion';
import DancingEmoji from './DancingEmoji';

function FloatingEmojis() {
  const emojis = [
    { icon: '🎂', animation: 'bounce' },
    { icon: '🎈', animation: 'wave' },
    { icon: '🎉', animation: 'shake' },
    { icon: '🎊', animation: 'spin' },
    { icon: '🎁', animation: 'jump' },
  ];

  return (
    <motion.div
      className="floating-emojis"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        padding: '1rem',
        flexWrap: 'wrap',
      }}
    >
      {emojis.map((emoji, i) => (
        <DancingEmoji
          key={i}
          emoji={emoji.icon}
          animationType={emoji.animation}
          delay={i * 0.2}
        />
      ))}
    </motion.div>
  );
}

export default FloatingEmojis;