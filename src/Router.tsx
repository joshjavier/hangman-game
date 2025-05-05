import { AnimatePresence } from 'motion/react';
import { useSnapshot } from 'valtio';
import { CategoryPick } from './screens/CategoryPick.screen';
import { HowToPlay } from './screens/HowToPlay.screen';
import { InGame } from './screens/InGame.screen';
import { MainMenu } from './screens/MainMenu.screen';
import { gameMachine } from './state';

export function Router() {
  const { state } = useSnapshot(gameMachine.getStore());

  let currentScreen = <MainMenu key={state} />;

  if (state === 'howtoplay') {
    currentScreen = <HowToPlay key={state} />;
  }

  if (state === 'categorypick') {
    currentScreen = <CategoryPick key={state} />;
  }

  if (['playing', 'paused', 'game_over'].includes(state)) {
    currentScreen = <InGame key={state} />;
  }

  return <AnimatePresence mode="wait">{currentScreen}</AnimatePresence>;
}
