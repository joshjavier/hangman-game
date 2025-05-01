import { motion } from 'motion/react';
import { Container, Title } from '@mantine/core';
import { BackButton } from '@/components/BackButton';
import { StepsContainer } from '@/components/Steps';
import howtoplay from '@/data/howtoplay.json';
import classes from './HowToPlay.module.css';

export function HowToPlay() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0.4 } }}
    >
      <div className={classes.overlay} />
      <Container size={1216} className={classes.container}>
        <div className={classes.header}>
          <BackButton />
          <Title order={2} className={classes.title}>
            How to Play
          </Title>
        </div>
        <StepsContainer steps={howtoplay} />
      </Container>
    </motion.div>
  );
}
