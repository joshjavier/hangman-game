import { useEffect, useRef } from 'react';
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
  const iconHeartRef = useRef<SVGSVGElement>(null);
  const healthBarRef = useRef<HTMLDivElement>(null);

  // Animate heart icon when player takes damage
  useEffect(() => {
    const onTransitionEnd = () => {
      if (remainingAttempts !== 1) {
        iconHeartRef.current?.classList.remove('shake-opacity');
      }
    };
    healthBarRef.current?.addEventListener('transitionend', onTransitionEnd);
    if (remainingAttempts < 8) {
      iconHeartRef.current?.classList.add('shake-opacity');
    }

    return () => {
      healthBarRef.current?.removeEventListener('transitionend', onTransitionEnd);
    };
  }, [remainingAttempts]);

  return (
    <Flex className={classes.container}>
      <HealthBar ref={healthBarRef} current={remainingAttempts} />
      <IconHeart ref={iconHeartRef} className={`shake-constant ${classes.icon}`} />
    </Flex>
  );
}
