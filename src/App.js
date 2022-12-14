import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div>New Branch</div>
      <div>New Test Branch</div>
      <div>New Test Branch 3</div>
    </ChakraProvider>
  );
}

export default App;
