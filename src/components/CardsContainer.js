// src/components/CardsContainer.js
import React from 'react';
import { Box, Grid } from '@mui/material';
import CardComponent from './CardComponent';
import TimerIcon from '@mui/icons-material/Timer'; // For "Real Time Delivery"
import LockIcon from '@mui/icons-material/Lock'; // For "Pay-Per Lead"
import PeopleIcon from '@mui/icons-material/People'; // For "Intelligent Filtering"
import EditIcon from '@mui/icons-material/Edit'; // For "Custom Solutions"
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber'; // Resembles a ticket

const cardsData = [
  { title: 'Exclusive Leads', Icon: ConfirmationNumberIcon },
  { title: 'Real Time Delivery', Icon: TimerIcon },
  { title: 'Pay-Per Lead', Icon: LockIcon },
  { title: 'Intelligent Filtering', Icon: PeopleIcon },
  { title: 'Custom Solutions', Icon: EditIcon },
];

const CardsContainer = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2, display: 'flex', justifyContent: 'center' }}>
      <Grid container spacing={2} justifyContent="center">
        {cardsData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <CardComponent title={card.title} Icon={card.Icon} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardsContainer;
