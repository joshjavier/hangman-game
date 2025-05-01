import { ActionIcon } from '@mantine/core';
import IconBack from '@/icons/icon-back.svg?react';
import { navigate } from '@/state';
import classes from './BackButton.module.css';

export function BackButton() {
  return (
    <ActionIcon
      classNames={{ root: classes.root, icon: classes.icon }}
      onClick={() => navigate('mainmenu')}
    >
      <IconBack />
    </ActionIcon>
  );
}
