import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import TimerIcon from '../assets/timer.png'; // Adjust the path as necessary

const FeatureButton = styled(Box)(({ theme }) => ({
  backgroundColor: '#5555551A',
  width: '424px',
  height: '88px',
  borderRadius: '32px',
  margin: '0 auto',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(1), // Top and bottom padding
  '&:hover': {
    backgroundColor: '#5555551A',
  },
  '&:active': {
    backgroundColor: 'rgba(85, 85, 85, 0.1)', // Lighten color on click
  },
  '&:focus': {
    outline: 'none',
  },
  [theme.breakpoints.down('430')]: {
    width: '100%', // Full width for smaller screens
    padding: theme.spacing(1), // Adjust padding for smaller screens
  },
}));

const FeatureText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Roie, Arial, sans-serif',
  fontSize: '24px',
  color: '#84E174',
  marginLeft: theme.spacing(4.5), // 36px from the left
}));

// Styled component for the image
const TimerImage = styled('img')(({ theme }) => ({
  height: 'auto', // maintain aspect ratio
  width: 'auto', // maintain aspect ratio
  [theme.breakpoints.down('430')]: {
    width: '30px', // Fixed width on small screens
    height: '38px', // Fixed height on small screens
  },
}));

const Features = () => {
  return (
    <FeatureButton>
      <FeatureText>Exclusive Leads</FeatureText>
      <TimerImage src={TimerIcon} alt="Timer" /> {/* This is the image */}
    </FeatureButton>
  );
};

export default Features;