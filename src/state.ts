import createMachine from 'valtio-fsm';
import { getRandomWord } from './data';

export type GameState =
  | 'mainmenu'
  | 'howtoplay'
  | 'categorypick'
  | 'playing'
  | 'paused'
  | 'game_over';
type GameResult = 'win' | 'lose' | null;
type GameContext = {
  category: string | null;
  wordToGuess: string;
  guessedLetters: string[];
  remainingAttempts: number;
  gameResult: GameResult;
};

// Based on specs, players lose after eight wrong guesses.
const HP = 8;

export const gameMachine = createMachine<GameState, GameContext>(
  'mainmenu',
  {
    mainmenu: {
      transitions: ['howtoplay', 'categorypick'],
      onEnter: (ctx) => {
        if (ctx.gameResult === 'win' || ctx.gameResult === 'lose') {
          ctx.category = null;
          ctx.wordToGuess = '';
          ctx.guessedLetters = [];
          ctx.remainingAttempts = HP;
          ctx.gameResult = null;
        }
      },
    },
    howtoplay: {
      transitions: ['mainmenu'],
    },
    categorypick: {
      transitions: ['mainmenu', 'playing'],
      onEnter: (ctx) => {
        if (ctx.gameResult === 'win' || ctx.gameResult === 'lose') {
          ctx.category = null;
          ctx.wordToGuess = '';
          ctx.guessedLetters = [];
          ctx.remainingAttempts = HP;
          ctx.gameResult = null;
        }
      },
    },
    playing: {
      transitions: ['paused', 'game_over'],
      onEnter: (ctx, category) => {
        // Scenario 1: User picks a category from the category pick screen
        if (ctx.category == null && typeof category === 'string') {
          ctx.category = category;
          ctx.wordToGuess = getRandomWord(ctx.category);
          ctx.guessedLetters = [];
          ctx.remainingAttempts = HP;
        }

        // Scenario 2: User continues game from the pause menu
        // Do nothing

        // Scenario 3: User starts a new game in the same category from the game over menu
        if (ctx.category && (ctx.gameResult === 'win' || ctx.gameResult === 'lose')) {
          ctx.wordToGuess = getRandomWord(ctx.category);
          ctx.guessedLetters = [];
          ctx.remainingAttempts = HP;
          ctx.gameResult = null;
        }
      },
    },
    paused: {
      transitions: ['playing', 'categorypick', 'mainmenu'],
    },
    game_over: {
      transitions: ['playing', 'categorypick', 'mainmenu'],
    },
  },
  {
    category: null,
    wordToGuess: '',
    guessedLetters: [],
    remainingAttempts: 8,
    gameResult: null,
  }
);

export const navigate = (state: GameState) => {
  gameMachine.moveTo(state);
};
