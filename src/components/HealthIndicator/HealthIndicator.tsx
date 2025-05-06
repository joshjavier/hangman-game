import { useSnapshot } from 'valtio';
import { Flex } from '@mantine/core';
import IconHeart from '@/icons/icon-heart.svg?react';
import { gameMachine } from '@/state';
import { HealthBar } from './HealthBar';
import classes from './HealthIndicator.module.css';

export function HealthIndicator() {
  const {
    context: { remainingAttempts },
  } = useSnapshot(gameMachine.getStore());

  return (
    <Flex className={classes.container}>
      <HealthBar current={remainingAttempts} />
      <IconHeart className={classes.icon} />
    </Flex>
  );
}
