import { CSSProperties } from 'react';
import classes from './HealthBar.module.css';

interface HealthBarProps {
  current: number;
  max?: number;
}

export function HealthBar({ current, max = 8 }: HealthBarProps) {
  return (
    <div
      className={classes.track}
      style={{ '--health-max': max, '--health-current': current } as CSSProperties}
    >
      <div className={classes.bar} />
    </div>
  );
}
