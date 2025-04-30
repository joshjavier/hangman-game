import { Box, Center, Container } from '@mantine/core';
import { MenuButton } from '@/components/MenuButton';
import { PlayButton } from '@/components/PlayButton';
import classes from './Home.module.css';

export function HomePage() {
  return (
    <Container size={592} className={classes.container}>
      <Center className={classes.content}>
        <Box className={classes.box}>
          <img
            src="/images/logo.svg"
            alt="The Hangman Game"
            width="374"
            height="185"
            className={classes.logo}
          />
          <PlayButton />
          <MenuButton>How to Play</MenuButton>
        </Box>
      </Center>
    </Container>
  );
}
