import { motion } from 'motion/react';
import { Container } from '@mantine/core';
import { HangmanWord } from '@/components/HangmanWord';
import { InGameHeader } from '@/components/InGameHeader';
import { InGameMenu } from '@/components/InGameMenu';
import { Keyboard } from '@/components/Keyboard';
import { Overlay } from '@/components/Overlay';
import classes from './InGame.module.css';

export function InGame() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={classes.container}
    >
      <Overlay />
      <div>
        <Container size={1216} className={classes.upper}>
          <InGameHeader />
        </Container>
      </div>
      <div className={classes.wordOuter}>
        <Container size={1216} className={classes.upper}>
          <HangmanWord />
        </Container>
      </div>
      <div>
        <Container size={1173} className={classes.lower}>
          <Keyboard />
        </Container>
      </div>
      <InGameMenu />
    </motion.div>
  );
}
