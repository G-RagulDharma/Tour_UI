import React from 'react';
import Stack from '@mui/material/Stack';
import Content from './components/Content';
import RightBar from './components/RightBar';
import Menu from './components/Menu';
import Container from '@mui/material/Container';
import Navbar from './components/Navbar';

function App() {


  return (
    <>
      <Navbar />
      <Container maxWidth='xl'>
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <Menu />
          <Content />
          <RightBar />
        </Stack>
      </Container>
    </>
  )
}

export default App
