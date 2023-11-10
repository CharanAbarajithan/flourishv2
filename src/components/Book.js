// src/components/Book.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import backgroundImage from '../assets/dylan.png'; // Ensure this is the correct path to your image

const relativeFontSize = (baseSize, screenWidth) => `${(baseSize / screenWidth) * 100}vw`;

const StyledBox = styled(Box)({
  position: 'relative',
  width: '100%', // Ensure the box stretches to the width of its parent container
  height: '284.03px', // Height as per your image's aspect ratio
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start', // Align children to the top
  alignItems: 'flex-start', // Align children to the left
  borderRadius: '32px',
  padding: '20px', // Adjusted padding
  boxSizing: 'border-box',
});

const Heading = styled(Typography)({
  fontFamily: 'Signature Mango, Arial, sans-serif',
  fontSize: relativeFontSize(26, 430),
  color: 'white',
  position: 'absolute',
  top: '36px', // Adjust as needed
  left: '36px',
});

const Subheading = styled(Typography)({
  fontFamily: 'Roie, Arial, sans-serif',
  fontSize: relativeFontSize(20, 430),
  color: 'white',
  position: 'absolute',
  top: '108px', // Adjust as needed
  left: '36px',
});

const BookButton = styled(Button)({
  position: 'absolute',
  top: '200px', // Position below the subheading
  left: '30%', // Center horizontally
  transform: 'translateX(-50%)', // Adjust horizontal position
  width: relativeFontSize(190, 430), // 190px on a 430px screen width
  height: '40px', // Height of the button
  lineHeight: '40px', // Align text vertically
  backgroundColor: '#D6F056',
  borderRadius: '20px',
  fontFamily: 'Roie, Arial, sans-serif',
  fontSize: relativeFontSize(20, 430), // 20px font size on a 430px screen width
  color: 'black',
  '&:hover': {
    backgroundColor: '#c4e346',
  },
  textTransform: 'none', // Prevent uppercase transformation
});

const Book = () => {
  return (
    <StyledBox>
      <Heading variant="h5">
        Let's Chat
      </Heading>
      <Subheading>
        Book your 30 minute discovery session online or over the phone
      </Subheading>
      <BookButton>
        Book now
      </BookButton>
    </StyledBox>
  );
};

export default Book;
