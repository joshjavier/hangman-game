import { useSnapshot } from 'valtio';
import { gameMachine } from '@/state';
import { Letter } from './Letter';
import classes from './HangmanWord.module.css';

interface WordProps {
  word: string;
}

export function Word({ word }: WordProps) {
  const {
    context: { guessedLetters },
  } = useSnapshot(gameMachine.getStore());

  return (
    <span className={classes.word}>
      {word.split('').map((letter, index) => (
        <Letter key={letter + index} value={letter} guessed={guessedLetters.includes(letter)} />
      ))}
    </span>
  );
}
