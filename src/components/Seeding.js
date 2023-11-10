// src/components/Seeding.js
import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// Calculate relative font size based on the width of the screen
const relativeFontSize = (baseSize, screenWidth) => `${(baseSize / screenWidth) * 100}vw`;

const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: '"Signature Mango", Arial, sans-serif', // Assuming 'Signature Mango' is correctly imported in your project
  fontSize: relativeFontSize(64, 430), // 64px on a 430px screen width
  textAlign: 'center',
  color: 'white', // Change as needed
  margin: theme.spacing(2, 0), // Adds vertical spacing for better readability
  [theme.breakpoints.up('sm')]: {
    fontSize: '3.75rem', // 60px for larger screens
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '4rem', // 64px for even larger screens
  },
}));

const SeedingBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%', // Adjust height as needed
  padding: '20px', // Adjust padding as needed
});

const Seeding = () => {
  return (
    <SeedingBox>
      <Heading>
        "Seeding Connections, Cultivating Leads"
      </Heading>
    </SeedingBox>
  );
};

export default Seeding;
