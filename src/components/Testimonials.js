// src/components/Testimonials.js
import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star'; // Import the star icon for ratings
import { styled } from '@mui/material/styles';

const TestimonialsContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  color: '#FFFFFF',
  padding: theme.spacing(4), // Adjust the padding as needed
  backgroundColor: '#0C0C0C', // Assuming a dark background, adjust as needed
}));

const Title = styled(Typography)({
  fontFamily: 'Signature Mango, Arial, sans-serif',
  fontSize: '2rem', // Adjust font size as needed
  marginBottom: '1rem', // Space between title and testimonial text
});

const TestimonialText = styled(Typography)({
  fontFamily: 'Roie, Arial, sans-serif',
  fontSize: '1rem', // Adjust font size as needed
  marginBottom: '1rem', // Space between testimonial text and stars
});

const AttributionText = styled(Typography)({
  fontFamily: 'Roie, Arial, sans-serif',
  color: '#84E174', // Color for the attribution text
  fontSize: '1rem', // Adjust font size as needed
});

const StarsContainer = styled(Stack)({ // Remove the direction from here
  justifyContent: 'center',
  alignItems: 'center',
});

const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <Title variant="h4">Fruits of Our Labour</Title>
      <TestimonialText>
        "Flourish has become an integral part of our business strategy. Their expertise and commitment to helping us achieve our business goals was a game changer."
      </TestimonialText>
      <StarsContainer direction="row" spacing={1}> {/* Explicitly set the direction here */}
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} style={{ color: '#FFD700' }} />
        ))}
      </StarsContainer>
      <AttributionText>
        Mark G. in NSW, Australia
      </AttributionText>
    </TestimonialsContainer>
  );
};

export default Testimonials;
