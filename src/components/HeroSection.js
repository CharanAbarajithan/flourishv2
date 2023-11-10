// src/components/HeroSection.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import backgroundImage from '../assets/iphonebg.png'; // Make sure this path is correct

const HeroContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#FFFFFF',
  padding: theme.spacing(2), // Adjust the padding as needed
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start', // Align items to the start (left)
  justifyContent: 'flex-start', // Align content to the start (top)
  minHeight: '50vh', // Keep the height as it is
  paddingLeft: theme.spacing(5), // Increase left padding to move content to the right
}));

const HeroHeading = styled(Typography)(({ theme }) => ({
  fontFamily: 'Signature Mango, Arial, sans-serif',
  textAlign: 'left', // Align text to the left
  marginBottom: theme.spacing(1), // Reduce spacing between headings
}));

const HeroSubheading = styled(Typography)(({ theme }) => ({
  fontFamily: 'Roie, Arial, sans-serif',
  textAlign: 'center', // Center the subheading text
  width: '100%', // Ensures the subheading can be centered by occupying full width
  marginTop: theme.spacing(2), // Adjust spacing above the subheading
}));

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroHeading variant="h3">Integrate.</HeroHeading>
      <HeroHeading variant="h3">Adapt.</HeroHeading>
      <HeroHeading variant="h3" sx={{ color: '#84E174', mb: 2 }}>
        Flourish.
      </HeroHeading>
      <HeroSubheading>
        "Inspiring Growth One Lead at a Time"
      </HeroSubheading>
    </HeroContainer>
  );
};

export default HeroSection;
