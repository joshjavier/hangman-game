import { useState } from 'react';
import { Button } from '@mantine/core';
import { guessLetter } from '@/state';
import classes from './Keyboard.module.css';

interface KeyProps {
  value: string;
}

export function Key({ value }: KeyProps) {
  const [disabled, setDisabled] = useState(false);

  const onClick = () => {
    setDisabled(true);
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
}
