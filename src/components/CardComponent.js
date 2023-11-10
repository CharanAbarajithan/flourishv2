// src/components/CardComponent.js
import React from 'react';
import { Card, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)({
  backgroundColor: '#5555551A',
  borderRadius: '15px',
  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: 'none',
  maxWidth: 345,
});

const Title = styled(Typography)({
  fontFamily: 'Roie, Arial, sans-serif',
  color: '#84E174',
  fontSize: '1rem',
});

const CardComponent = ({ title, Icon }) => {
  return (
    <StyledCard>
      <Title>{title}</Title>
      <Icon style={{ color: '#D6F056', fontSize: '2rem' }} />
    </StyledCard>
  );
};

export default CardComponent;
