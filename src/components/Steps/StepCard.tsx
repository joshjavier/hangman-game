import { Step } from '.';
import { motion } from 'motion/react';
import { Paper, Text, Title } from '@mantine/core';
import classes from './StepCard.module.css';

type StepCardProps = Step;

export function StepCard({ title, description }: StepCardProps) {
  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <Paper component={motion.li} variants={variants} className={classes.card}>
      <div className={classes.inner}>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
        <Text className={classes.description}>{description}</Text>
      </div>
    </Paper>
  );
}
