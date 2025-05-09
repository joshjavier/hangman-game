import { CSSProperties, forwardRef } from 'react';
import classes from './HealthBar.module.css';

interface HealthBarProps {
  current: number;
  max?: number;
}
type Ref = HTMLDivElement;

export const HealthBar = forwardRef<Ref, HealthBarProps>(({ current, max = 8 }, ref) => {
  return (
    <div
      className={classes.track}
      style={{ '--health-max': max, '--health-current': current } as CSSProperties}
    >
      <div className={classes.inner}>
        <div className={classes.bar} />
        <div ref={ref} className={classes.damage} />
      </div>
    </div>
  );
});
