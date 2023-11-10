import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import backgroundImg from '../assets/bg2.png';

const relativeFontSize = (baseSize, screenWidth) => `${(baseSize / screenWidth) * 100}vw`;

const MessageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundImage: `url(${backgroundImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  boxSizing: 'border-box', // Ensures padding is included in the width
  width: '100%', // Takes the full width of the parent
  maxWidth: '424px', // Maximum width to prevent overflow on larger screens
  height: 'auto', // Height adjusts to content
  minHeight: '475px', // Minimum height to maintain design
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: theme.spacing(4),
  [theme.breakpoints.down('xs')]: {
    width: '100%', // Takes the full width of the viewport
    padding: '5vw', // Responsive padding
  },
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  fontFamily: 'Roie, Arial, sans-serif',
  fontSize: relativeFontSize(17, 430),
  color: 'white',
  textAlign: 'left',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.25rem',
  },
}));

const Highlight = styled('span')({
  color: '#84E174',
});

const Signature = styled(Typography)(({ theme }) => ({
  fontFamily: 'Roie, Arial, sans-serif',
  position: 'absolute',
  bottom: theme.spacing(4),
  right: theme.spacing(4),
  color: 'white',
}));

const GreenText = styled('span')({
  color: '#84E174',
});

const Message = () => {
  return (
    <MessageContainer>
      <Paragraph>
        Growing a business can be a challenging endeavour requiring <Highlight>strategic effort</Highlight> and a series of deliberate steps.
      </Paragraph>
      <Paragraph>
        Not every idea is the <Highlight>optimal choice</Highlight>.
      </Paragraph>
      <Paragraph>
        We facilitate the integration of well established, success driven strategies to enhance your sales performance and allow you to do what you do best.
      </Paragraph>
      <Paragraph>
        Go and operate your business with <Highlight>greater efficiency</Highlight>, don’t waste your time and money on marketing strategies and come flourish with our state of the art lead generation service.
      </Paragraph>
      <Signature>
        Regards, <GreenText>Flourish</GreenText>
      </Signature>
    </MessageContainer>
  );
};

export default Message;
