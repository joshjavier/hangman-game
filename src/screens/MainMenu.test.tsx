import { render, screen } from '@test-utils';
import { MainMenu } from './MainMenu.screen';

describe('Main Menu', () => {
  it('has a heading with the game name', () => {
    render(<MainMenu />);
    expect(screen.getByRole('heading', { name: /The Hangman Game/i }));
  });

  it('has a button to start the game', () => {
    render(<MainMenu />);
    expect(screen.getByRole('button', { name: /start game/i }));
  });

  it('has a HOW TO PLAY button', () => {
    render(<MainMenu />);
    expect(screen.getByRole('button', { name: /how to play/i }));
  });
});
