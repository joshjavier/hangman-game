import { Step } from '.';
import { Paper, Text, Title } from '@mantine/core';
import classes from './StepCard.module.css';

type StepCardProps = Step;

export function StepCard({ title, description }: StepCardProps) {
  return (
    <Paper component="li" className={classes.card}>
      <div className={classes.inner}>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
        <Text className={classes.description}>{description}</Text>
      </div>
    </Paper>
  );
}
