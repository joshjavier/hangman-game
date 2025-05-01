import { Step } from '.';
import { Flex } from '@mantine/core';
import { StepCard } from './StepCard';
import classes from './StepsContainer.module.css';

interface StepsProps {
  steps: Step[];
}

export function StepsContainer({ steps }: StepsProps) {
  return (
    <Flex component="ol" className={classes.root}>
      {steps.map((step) => (
        <StepCard key={step.title} {...step} />
      ))}
    </Flex>
  );
}
