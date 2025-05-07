import { useSnapshot } from 'valtio';
import { gameMachine } from '@/state';
import { Key } from './Key';
import classes from './Keyboard.module.css';

export function Keyboard() {
  const {
    context: { guessedLetters },
  } = useSnapshot(gameMachine.getStore());
  const keys = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <div className={classes.grid}>
      {keys.map((key) => (
        <Key key={key} value={key} disabled={guessedLetters.includes(key)} />
      ))}
    </div>
  );
}
