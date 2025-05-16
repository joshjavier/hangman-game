import { motion } from 'motion/react';
import { Container } from '@mantine/core';
import { HeaderWithBackButton } from '@/components/HeaderWithBackButton';
import { Overlay } from '@/components/Overlay';
import { StepsContainer } from '@/components/Steps';
import { howtoplay } from '@/data';
import classes from './HowToPlay.module.css';

export function HowToPlay() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0.4 } }}
    >
      <Overlay />
      <Container size={1216} className={classes.container}>
        <HeaderWithBackButton title="How to Play" />
        <StepsContainer steps={howtoplay} />
      </Container>
    </motion.div>
  );
}
