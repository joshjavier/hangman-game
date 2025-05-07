import { useSnapshot } from 'valtio';
import { gameMachine } from '@/state';
import { Word } from './Word';
import classes from './HangmanWord.module.css';

export function HangmanWord() {
  const {
    context: { wordToGuess },
  } = useSnapshot(gameMachine.getStore());

  const tokens = wordToGuess.split(' ');

  return (
    <div className={classes.container}>
      {tokens.map((token, index) => (
        <Word key={token + index} word={token} />
      ))}
    </div>
  );
}
