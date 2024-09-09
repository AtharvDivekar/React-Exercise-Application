// import React from 'react';
// import { Stack, Typography } from '@mui/material';
// import Icon from '../assets/icons/gym.png';

// const BodyPart = ({ item, setBodyPart, bodyPart }) => (
//   <Stack
//     type="button"
//     alignItems="center"
//     justifyContent="center"
//     className="bodyPart-card"
//     sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
//     onClick={() => {
//       setBodyPart(item);
//       window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
//     }}
//   >
//     <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
//     <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
//   </Stack>
// );

// export default BodyPart;

import React from 'react';
import { Stack, Typography, Paper } from '@mui/material';
import Icon from '../assets/images/logo2.jpg';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Paper
    component={Stack}
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
      border: bodyPart === item ? '2px solid #25fbff' : '2px solid #9d9da8', // Border color changes based on selection
      borderRadius: '12px',
      boxShadow: 3,
      p: 2,
      width: '270px',
      height: '282px',
      cursor: 'pointer',
      transition: 'box-shadow 0.3s, border-color 0.3s',
      backgroundColor: bodyPart === item ? '#fffafb' : '#000000', // Background color changes based on selection
      '&:hover': {
        boxShadow: 5,
      },
    }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '60px', height: '60px' }} />
    <Typography variant="h5" fontWeight="bold" fontFamily="Alegreya" color="#3a1212" textTransform="capitalize" mt={2}>
      {item}
    </Typography>
  </Paper>
);

export default BodyPart;
