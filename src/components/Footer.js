// import React from 'react';
// import { Box, Stack, Typography } from '@mui/material';
// import Logo from '../assets/images/logo1.jpg';

// const Footer = () => (
//   <Box mt="80px" bgcolor="#FFF3F4">
//     <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
//       <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
//     </Stack>
//     <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️ by JavaScript Mastery</Typography>
//   </Box>
// );

// export default Footer;

import React from 'react';
import { Box, Stack, Typography, IconButton, Divider } from '@mui/material';
import { Facebook, Instagram, Twitter, MailOutline, Phone } from '@mui/icons-material'; // Importing necessary icons
import Logo from '../assets/images/footer.jpg';

const Footer = () => (
  <Box sx={{ bgcolor: '#fffafb', color: '#3a1212', py: '40px' }}>
    <Box sx={{ maxWidth: '1200px', margin: '0 auto', px: '20px', textAlign: 'center' }}>
      <Box sx={{ borderRadius: '10px', overflow: 'hidden', marginBottom: '20px' }}>
        <img src={Logo} alt="logo" style={{ width: '200px', height: 'auto', borderRadius: '10px' }} />
      </Box>
      <Typography variant="h4" sx={{ mt: '20px', fontWeight: 'bold', fontFamily: 'sans-serif', letterSpacing: '2px' }}>FitLife</Typography>
      <Typography variant="body1">
        Transforming Lives Through Exercise and Fitness.
      </Typography>
      <Typography variant="body1">
        Join us in the journey to a healthier and fit you in life.
      </Typography>
      <Stack direction="row" justifyContent="center" spacing="20px" sx={{ mt: '20px' }}>
        <IconButton aria-label="facebook" sx={{ color: '	#1877F2' }}>
          <Facebook />
        </IconButton>
        <IconButton aria-label="instagram" sx={{ color: '	#FCAF45' }}>
          <Instagram />
        </IconButton>
        <IconButton aria-label="twitter" sx={{ color: '	#1DA1F2' }}>
          <Twitter />
        </IconButton>
      </Stack>
      <Stack direction="row" justifyContent="center" alignItems="center" sx={{ mt: '20px' }}>
        <MailOutline sx={{ mr: '5px', color: '#000' }} />
        <Typography variant="body2">exercise@example.com</Typography>
      </Stack>
      <Stack direction="row" justifyContent="center" alignItems="center" sx={{ mt: '10px' }}>
        <Phone sx={{ mr: '5px', color: '#000' }} />
        <Typography variant="body2">+9999999999</Typography>
      </Stack>
      {/* <Stack direction="row" justifyContent="center" alignItems="center" sx={{ mt: '10px' }}>
        <Description sx={{ mr: '5px', color: '#FF2625' }} />
        <Typography variant="body2"><a href="#">Privacy Policy</a></Typography>
      </Stack>
      <Stack direction="row" justifyContent="center" alignItems="center" sx={{ mt: '10px' }}>
        <Description sx={{ mr: '5px', color: '#FF2625' }} />
        <Typography variant="body2"><a href="#">Terms of Service</a></Typography>
      </Stack> */}
      <Divider sx={{ my: '20px' }} />
      <Typography variant="body2" textAlign="center" sx={{ my: '20px' }}>
      Check out our newest fitness tips and updates! Follow us on social media to stay in the loop.
      </Typography>
    </Box>
    <Box sx={{ borderTop: '1px solid #3a3a3a', mt: '20px', pt: '20px', bgcolor: '#fffafb' }}>
      <Typography variant="body2" textAlign="center">© 2024 Your Exercise Club. All rights reserved.</Typography>
    </Box>
  </Box>
);

export default Footer;
