import { motion } from 'motion/react';
import { Container } from '@mantine/core';
import { HangmanWord } from '@/components/HangmanWord';
import { InGameHeader } from '@/components/InGameHeader';
import { Keyboard } from '@/components/Keyboard';
import { Overlay } from '@/components/Overlay';
import classes from './InGame.module.css';

export function InGame() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Overlay />
      <Container size={1216} className={classes.upper}>
        <InGameHeader />
        <HangmanWord />
      </Container>
      <Container size={1173} className={classes.lower}>
        <Keyboard />
      </Container>
    </motion.div>
  );
}
