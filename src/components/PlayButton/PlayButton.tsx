import { ActionIcon, ActionIconProps } from '@mantine/core';
import IconPlay from '@/icons/icon-play.svg?react';
import classes from './PlayButton.module.css';

type PlayButtonProps = ActionIconProps & {
  onGameStart?: () => void;
};

export function PlayButton({ onGameStart, ...props }: PlayButtonProps) {
  const onClick = () => {
    if (onGameStart) {
      onGameStart();
    }
  };

  return (
    <ActionIcon
      aria-label="Start game"
      classNames={{ root: classes.root, icon: classes.icon }}
      onClick={onClick}
      data-action="play"
      {...props}
    >
      <IconPlay />
    </ActionIcon>
  );
}
