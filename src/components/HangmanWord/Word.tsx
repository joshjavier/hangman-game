import { memo } from 'react';
import { Letter } from './Letter';
import classes from './HangmanWord.module.css';

interface WordProps {
  word: string;
  guessedLetters: string;
}

export const Word = memo(({ word, guessedLetters }: WordProps) => {
  return (
    <span className={classes.word}>
      {word.split('').map((letter, index) => (
        <Letter
          key={letter + index}
          value={letter}
          guessed={guessedLetters.split('').includes(letter)}
        />
      ))}
    </span>
  );
});
