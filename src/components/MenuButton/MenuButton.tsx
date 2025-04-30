import { Button, ButtonProps } from '@mantine/core';
import classes from './MenuButton.module.css';

type MenuButtonProps = ButtonProps;

export function MenuButton({ children, ...props }: MenuButtonProps) {
  return (
    <Button classNames={{ root: classes.root }} {...props}>
      {children}
    </Button>
  );
}
