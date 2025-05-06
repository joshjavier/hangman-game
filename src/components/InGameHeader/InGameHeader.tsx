import { useSnapshot } from 'valtio';
import { Flex, Title } from '@mantine/core';
import { categories } from '@/data';
import { gameMachine } from '@/state';
import { HealthIndicator } from '../HealthIndicator';
import { PauseButton } from '../PauseButton';
import classes from './InGameHeader.module.css';

export function InGameHeader() {
  const { context } = useSnapshot(gameMachine.getStore());
  const category = categories.find((c) => c.id === context.category)?.name;

  return (
    <Flex className={classes.header}>
      <Flex className={classes.left}>
        <PauseButton />
        <Title order={2} className={classes.title}>
          {category}
        </Title>
      </Flex>
      <HealthIndicator />
    </Flex>
  );
}
