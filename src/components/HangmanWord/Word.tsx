import { Letter } from './Letter';
import classes from './HangmanWord.module.css';

interface WordProps {
  word: string;
}

export function Word({ word }: WordProps) {
  return (
    <span className={classes.word}>
      {word.split('').map((letter, index) => (
        <Letter key={letter + index} value={letter} />
      ))}
    </span>
  );
}
