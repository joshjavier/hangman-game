import { useSnapshot } from 'valtio';
import { gameMachine } from '@/state';

export function HangmanWord() {
  const { context } = useSnapshot(gameMachine.getStore());

  return <div>{context.wordToGuess}</div>;
}
