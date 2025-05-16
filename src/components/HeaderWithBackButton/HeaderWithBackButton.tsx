import { Title } from '@mantine/core';
import { BackButton } from '../BackButton';
import classes from './HeaderWithBackButton.module.css';

interface HeaderWithBackButtonProps {
  title: string;
}

export function HeaderWithBackButton({ title }: HeaderWithBackButtonProps) {
  return (
    <div className={classes.header}>
      <BackButton />
      <Title order={2} className={classes.title}>
        {title}
      </Title>
    </div>
  );
}
