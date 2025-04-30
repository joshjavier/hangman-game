import { proxy, useSnapshot } from 'valtio';

export type Screen = 'mainmenu' | 'categorypick' | 'howtoplay' | 'ingame';

const state = proxy<{ screen: Screen }>({
  screen: 'mainmenu',
});

export const navigate = (screen: Screen) => {
  state.screen = screen;
};

export { state, useSnapshot };
