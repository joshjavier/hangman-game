import { Button, ButtonProps } from '@mantine/core';
import { GameState, navigate } from '@/state';
import classes from './MenuButton.module.css';

type MenuButtonProps = ButtonProps & {
  target?: GameState;
};

export function MenuButton({ children, target, ...props }: MenuButtonProps) {
  const onClick = () => {
    if (target) {
      navigate(target);
    }
  };

  return (
    <Button classNames={{ root: classes.root }} onClick={onClick} {...props}>
      {children}
    </Button>
  );
}
