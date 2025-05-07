import { useEffect, useState } from 'react';
import { useSnapshot } from 'valtio';
import { Modal, Title } from '@mantine/core';
import { gameMachine, navigate } from '@/state';
import { MenuButton } from '../MenuButton';
import classes from './InGameMenu.module.css';

type ModalTitle = 'Paused' | 'You Win' | 'You Lose';
type PlayingAction = 'Continue' | 'Play Again!';

export function InGameMenu() {
  const {
    state,
    context: { gameResult },
  } = useSnapshot(gameMachine.getStore());
  const [title, setTitle] = useState<ModalTitle>('Paused');
  const [playing, setPlaying] = useState<PlayingAction>('Continue');

  useEffect(() => {
    if (state === 'game_over' && gameResult != null) {
      setTitle(gameResult === 'win' ? 'You Win' : 'You Lose');
      setPlaying('Play Again!');
    }

    if (state === 'paused') {
      setTitle('Paused');
      setPlaying('Continue');
    }
  }, [state]);

  return (
    <Modal
      opened={['paused', 'game_over'].includes(state)}
      onClose={() => navigate('playing')}
      centered
      withCloseButton={false}
      closeOnClickOutside={false}
      closeOnEscape={state === 'paused'}
      classNames={{
        root: classes.root,
        content: classes.content,
        overlay: classes.overlay,
        body: classes.body,
      }}
    >
      <Title order={3} className={classes.title}>
        {title}
      </Title>
      <MenuButton target="playing" data-autofocus>
        {playing}
      </MenuButton>
      <MenuButton target="categorypick">New Category</MenuButton>
      <MenuButton target="mainmenu" variant="pink">
        Quit Game
      </MenuButton>
    </Modal>
  );
}
