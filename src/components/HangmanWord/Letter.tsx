import { memo } from 'react';
import classes from './HangmanWord.module.css';

interface LetterProps {
  value: string;
  guessed: boolean;
}

export const Letter = memo(({ value, guessed }: LetterProps) => {
  return <span className={classes.letter}>{guessed ? value : null}</span>;
});
