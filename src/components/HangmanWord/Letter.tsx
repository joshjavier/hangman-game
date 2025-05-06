import { useSnapshot } from 'valtio';
import { gameMachine } from '@/state';
import classes from './HangmanWord.module.css';

interface LetterProps {
  value: string;
}

export function Letter({ value }: LetterProps) {
  const {
    context: { guessedLetters },
  } = useSnapshot(gameMachine.getStore());

  return <span className={classes.letter}>{guessedLetters.includes(value) ? value : null}</span>;
}
