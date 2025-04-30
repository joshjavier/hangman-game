import { Button, ButtonProps } from '@mantine/core';
import { navigate, Screen } from '@/state';
import classes from './MenuButton.module.css';

type MenuButtonProps = ButtonProps & {
  target?: Screen;
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
