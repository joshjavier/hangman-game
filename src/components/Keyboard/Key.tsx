import { memo } from 'react';
import { Button } from '@mantine/core';
import { guessLetter } from '@/state';
import classes from './Keyboard.module.css';

interface KeyProps {
  value: string;
  disabled?: boolean;
}

export const Key = memo(({ value, disabled }: KeyProps) => {
  const onClick = () => {
    guessLetter(value);
  };

  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      classNames={{ root: classes.key, label: classes.keyLabel }}
    >
      {value}
    </Button>
  );
});
