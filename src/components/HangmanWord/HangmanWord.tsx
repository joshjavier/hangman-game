import { useEffect } from 'react';
import { useAnimate } from 'motion/react';
import { useSnapshot } from 'valtio';
import { gameMachine } from '@/state';
import { Word } from './Word';
import classes from './HangmanWord.module.css';

export function HangmanWord() {
  const {
    context: { wordToGuess, gameResult },
  } = useSnapshot(gameMachine.getStore());
  const [scope, animate] = useAnimate();

  const tokens = wordToGuess.split(' ');

  useEffect(() => {
    if (gameResult === 'win') {
      animate(
        '[data-effect="shine"]',
        { x: [0, 100, 180], skewX: '-25deg' },
        { duration: 1, times: [0, 0.7, 1] }
      );
    }
  }, [gameResult]);

  return (
    <div ref={scope} className={classes.container}>
      {tokens.map((token, index) => (
        <Word key={token + index} word={token} />
      ))}
    </div>
  );
}
