import { AnimatePresence, motion } from 'motion/react';
import { Category } from '@/data';
import { SelectableCategory } from './SelectableCategory';
import classes from './CategoriesContainer.module.css';

interface CategoriesContainerProps {
  categories: Category[];
}

export function CategoriesContainer({ categories }: CategoriesContainerProps) {
  const variants = {
    hidden: { opacity: 0, transition: { staggerChildren: 0.1, staggerDirection: -1 } },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
  };

  return (
    <motion.ul
      className={classes.grid}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <AnimatePresence>
        {categories.map((category) => (
          <SelectableCategory key={category.id} category={category} />
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}
