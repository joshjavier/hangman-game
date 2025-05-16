import { Step } from '.';
import { AnimatePresence, motion } from 'motion/react';
import { Flex } from '@mantine/core';
import { StepCard } from './StepCard';
import classes from './StepsContainer.module.css';

interface StepsProps {
  steps: Step[];
}

export function StepsContainer({ steps }: StepsProps) {
  const variants = {
    hidden: { opacity: 0, transition: { staggerChildren: 0.1, staggerDirection: -1 } },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
  };

  return (
    <Flex
      component={motion.ol}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={classes.root}
    >
      <AnimatePresence>
        {steps.map((step) => (
          <StepCard key={step.title} {...step} />
        ))}
      </AnimatePresence>
    </Flex>
  );
}
