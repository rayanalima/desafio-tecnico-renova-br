import React, { Component, Fragment } from 'react'
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
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './pages/List';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/candidate/list' element={<List />} />
      </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
