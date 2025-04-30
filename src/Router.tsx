import { HowToPlay } from './screens/HowToPlay.screen';
import { MainMenu } from './screens/MainMenu.screen';
import { state, useSnapshot } from './state';

export function Router() {
  const { screen } = useSnapshot(state);

  let currentScreen = <MainMenu />;

  if (screen === 'howtoplay') {
    currentScreen = <HowToPlay />;
  }

  return <>{currentScreen}</>;
}
