// src/App.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import GlobalStyle from './GlobalStyle';
import theme from './theme';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'; // Import the HeroSection component
import Testimonials from './components/Testimonials';
import Book from './components/Book'; // Import the Book component
import Seeding from './components/Seeding';
import Message from './components/Message';
import SignUp from './components/SignUp';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar /> {/* Include the Navbar component at the top */}
      <HeroSection /> {/* Include the HeroSection component below the Navbar */}
      <Testimonials />
      <Book /> {/* Include the Book component below the CardsContainer */}
      <Seeding />
      <Message />
      <SignUp  />
    </ThemeProvider>
  );
}

export default App;
