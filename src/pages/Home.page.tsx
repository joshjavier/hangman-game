import { Center, Container } from '@mantine/core';
import classes from './Home.module.css';

export function HomePage() {
  return (
    <Container size={592} className={classes.container}>
      <Center className={classes.content}>
        <img src="/images/logo.svg" alt="The Hangman Game" width="374" height="185" />
      </Center>
    </Container>
  );
}
