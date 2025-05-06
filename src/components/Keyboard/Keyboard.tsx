import { Key } from './Key';
import classes from './Keyboard.module.css';

export function Keyboard() {
  const keys = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <div className={classes.grid}>
      {keys.map((key) => (
        <Key key={key} value={key} />
      ))}
    </div>
  );
}
