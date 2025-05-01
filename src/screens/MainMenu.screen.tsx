import { AnimatePresence, motion } from 'motion/react';
import { Box, Center, Container } from '@mantine/core';
import { MenuButton } from '@/components/MenuButton';
import { PlayButton } from '@/components/PlayButton';
import classes from './MainMenu.module.css';

export function MainMenu() {
  return (
    <Container size={592} className={classes.container}>
      <Center className={classes.content}>
        <AnimatePresence propagate>
          <Box
            className={classes.box}
            component={motion.div}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -500, transition: { bounce: 0 } }}
          >
            <img
              src="/images/logo.svg"
              alt="The Hangman Game"
              width="374"
              height="185"
              className={classes.logo}
            />
            <PlayButton />
            <MenuButton target="howtoplay">How to Play</MenuButton>
          </Box>
        </AnimatePresence>
      </Center>
    </Container>
  );
}
