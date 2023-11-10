import React, { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import signupImg from '../assets/signup.png'; // Ensure the image path is correct

// This function will calculate the height to maintain the aspect ratio of the background
const calculateHeight = (width, originalWidth, originalHeight) => {
  return `${(originalHeight / originalWidth) * width}vw`;
};

const SignUpContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${signupImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100vw', // Take up 100% of the viewport width
  height: calculateHeight(100, 430, 716), // Calculate the height to maintain the aspect ratio
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start', // Align content to the top
  alignItems: 'center',
  paddingTop: theme.spacing(2), // Add padding at the top
  marginTop: theme.spacing(4), // Add top margin to create a gap from the component above
}));

const Heading = styled(Typography)({
  fontFamily: '"Signature Mango", cursive', // Replace with the correct font family name
  fontSize: '56px', // Set the font size for the heading
  textAlign: 'center',
  color: 'white', // Set the text color for the heading
  width: '100%', // Ensure the heading takes the full width of the container
  paddingTop: '20px', // Add some padding to the top of the heading
});

const Subheading = styled(Typography)(({ theme }) => ({
    fontFamily: 'Roie, Arial, sans-serif',
    fontSize: '20px',
    textAlign: 'center',
    color: 'white',
    width: '100%',
    marginTop: theme.spacing(4),
  }));
  
  const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#5555554D',
    color: 'white',
    fontFamily: 'Roie, Arial, sans-serif',
    fontSize: '20px',
    textTransform: 'none',
    width: '100%',
    maxWidth: '100%',
    height: '80px',
    borderRadius: '32px',
    marginTop: theme.spacing(),
    marginBottom: theme.spacing(2),
    '&:hover': {
      backgroundColor: '#5555554D',
      
    },
    '&:first-of-type': {
      marginTop: theme.spacing(6), // Increase the top margin for the first button
    },
  }));
  
  const StyledTextField = styled(TextField)(({ theme }) => ({
    fontFamily: 'Roie, Arial, sans-serif', // Specify the Roie font
    fontSize: '20px',
    width: '100%',
    maxWidth: '100%',
    height: '80px',
    '& .MuiInputBase-root': {
      height: '100%',
      color: '#000', // Text color
      opacity: 1,
      fontFamily: 'Roie, Arial, sans-serif', // Ensure Roie font is applied
    },
    '& .MuiInputBase-input': {
      height: 'calc(100% - 20px)', // Adjust height to account for padding
      borderRadius: '32px', // Set the border-radius
      backgroundColor: '#FFFFFF', // Background color of the input
      padding: '10px 16px', // Padding inside the text field
      boxSizing: 'border-box', // Include padding in height calculation
      fontSize: '20px', // Font size for input text
      textAlign: 'center', // Center the text
      color: '#000', // Text color for the input text
      opacity: 1,
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none', // Remove default border
    },
    marginBottom: theme.spacing(2), // Space between text fields
    '&:first-of-type': {
      marginTop: theme.spacing(8), // Increased space below the subheading for the first text field
    },
  }));

  const BookNowButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#D6F056',
    color: 'black',
    fontFamily: 'Roie, Arial, sans-serif',
    fontSize: '20px',
    width: '190px',
    height: '40px',
    borderRadius: '20px', // Adjust as needed for rounded corners
    marginTop: theme.spacing(4), // Adjust this value to position the button lower
    textTransform: 'none', // This prevents text from being automatically capitalized
    '&:hover': {
      backgroundColor: '#CCEA4F', // Slightly darker shade on hover, adjust as needed
    },
  }));
  
  
  const SignUp = () => {
    const [step, setStep] = useState(0);
  
    const advanceStep = () => {
      setStep(prevStep => prevStep + 1);
    };
  
    const renderButtons = (buttonLabels) => (
      <>
        {buttonLabels.map((text, index) => (
          <StyledButton key={index} onClick={advanceStep}>{text}</StyledButton>
        ))}
      </>
    );
  
    const subheadingTexts = [
      "What type of leads are you looking for?",
      "Have you used a lead generation service before?",
      "Why do you need these leads?",
      "How many do you require per month?",
      "Great, your details?"
    ];
  
    let content;
  
    switch (step) {
      case 0:
        content = renderButtons(['Real Estate', 'Mortgage Brokering', 'Financial Services', 'Something Specific']);
        break;
      case 1:
        content = renderButtons(['Yes', 'No']);
        break;
      case 2:
        content = renderButtons(['Starting Out', 'Expanding', 'Ready to Sell']);
        break;
      case 3:
        content = renderButtons(['40-99', '100-199', '200+']);
        break;
      case 4:
        // Note: No Subheading here since it's included below before {content}
        content = (
          <>
            <StyledTextField variant="outlined" placeholder="Enter Name" />
            <StyledTextField variant="outlined" placeholder="Enter Email" />
            <StyledTextField variant="outlined" placeholder="Enter Number" />
            <BookNowButton>Book Now</BookNowButton>
          </>
        );
        break;
      default:
        content = <></>;
    }
  
    return (
      <SignUpContainer>
        <Heading variant="h1">Sign Up Now</Heading>
        {/* Render the subheading only if the step is not 4 */}
        {step !== 4 && <Subheading>{subheadingTexts[step]}</Subheading>}
        {content}
      </SignUpContainer>
    );
  };
  
  export default SignUp;