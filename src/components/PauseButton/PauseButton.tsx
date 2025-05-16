import { ActionIcon } from '@mantine/core';
import IconMenu from '@/icons/icon-menu.svg?react';
import { navigate } from '@/state';
import classes from './PauseButton.module.css';

export function PauseButton() {
  return (
    <ActionIcon
      classNames={{ root: classes.root, icon: classes.icon }}
      onClick={() => navigate('paused')}
    >
      <IconMenu />
    </ActionIcon>
  );
}
