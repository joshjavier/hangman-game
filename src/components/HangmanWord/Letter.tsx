import { memo } from 'react';
import { motion } from 'motion/react';
import classes from './HangmanWord.module.css';

interface LetterProps {
  value: string;
  guessed: boolean;
}

export const Letter = memo(({ value, guessed }: LetterProps) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: guessed ? 1 : 0.25 }}
      className={classes.letter}
    >
      {guessed && (
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { type: 'spring', stiffness: 500, damping: 32 },
          }}
        >
          {value}
        </motion.span>
      )}
    </motion.span>
  );
});
