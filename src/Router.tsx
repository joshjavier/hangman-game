import { AnimatePresence } from 'motion/react';
import { CategoryPick } from './screens/CategoryPick.screen';
import { HowToPlay } from './screens/HowToPlay.screen';
import { MainMenu } from './screens/MainMenu.screen';
import { state, useSnapshot } from './state';

export function Router() {
  const { screen } = useSnapshot(state);

  let currentScreen = <MainMenu key={screen} />;

  if (screen === 'howtoplay') {
    currentScreen = <HowToPlay key={screen} />;
  }

  if (screen === 'categorypick') {
    currentScreen = <CategoryPick key={screen} />;
  }

  return <AnimatePresence mode="wait">{currentScreen}</AnimatePresence>;
}
