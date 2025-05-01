import { AnimatePresence } from 'motion/react';
import { HowToPlay } from './screens/HowToPlay.screen';
import { MainMenu } from './screens/MainMenu.screen';
import { state, useSnapshot } from './state';

export function Router() {
  const { screen } = useSnapshot(state);

  let currentScreen = <MainMenu key="mainmenu" />;

  if (screen === 'howtoplay') {
    currentScreen = <HowToPlay key="howtoplay" />;
  }

  return <AnimatePresence mode="wait">{currentScreen}</AnimatePresence>;
}
