import { motion } from 'motion/react';
import { Container } from '@mantine/core';
import { CategoriesContainer } from '@/components/Category';
import { HeaderWithBackButton } from '@/components/HeaderWithBackButton';
import { Overlay } from '@/components/Overlay';
import { categories } from '@/data';
import classes from './CategoryPick.module.css';

export function CategoryPick() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0.4 } }}
    >
      <Overlay />
      <Container size={1216} className={classes.container}>
        <HeaderWithBackButton title="Pick a Category" />
        <CategoriesContainer categories={categories} />
      </Container>
    </motion.div>
  );
}
