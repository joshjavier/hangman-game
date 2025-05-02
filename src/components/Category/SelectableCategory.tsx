import { motion } from 'motion/react';
import { Button, ButtonProps } from '@mantine/core';
import { Category } from '@/data';
import classes from './SelectableCategory.module.css';

type SelectableCategoryProps = ButtonProps & {
  category: Category;
};

export function SelectableCategory({ category, ...props }: SelectableCategoryProps) {
  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <Button
      component={motion.button}
      variants={variants}
      classNames={{ root: classes.root, label: classes.label }}
      {...props}
    >
      {category.name}
    </Button>
  );
}
