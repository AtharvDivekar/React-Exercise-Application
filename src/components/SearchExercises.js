// import React, { useEffect, useState } from 'react';
// import { Box, Button, Stack, TextField, Typography } from '@mui/material';

// import { exerciseOptions, fetchData } from '../utils/fetchData';
// import HorizontalScrollbar from './HorizontalScrollbar';

// const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
//   const [search, setSearch] = useState('');
//   const [bodyParts, setBodyParts] = useState([]);

//   useEffect(() => {
//     const fetchExercisesData = async () => {
//       const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

//       setBodyParts(['all', ...bodyPartsData]);
//     };

//     fetchExercisesData();
//   }, []);

//   const handleSearch = async () => {
//     if (search) {
//       const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

//       const searchedExercises = exercisesData.filter(
//         (item) => item.name.toLowerCase().includes(search)
//                || item.target.toLowerCase().includes(search)
//                || item.equipment.toLowerCase().includes(search)
//                || item.bodyPart.toLowerCase().includes(search),
//       );

//       window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

//       setSearch('');
//       setExercises(searchedExercises);
//     }
//   };

//   return (
//     <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
//       <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
//         Awesome Exercises You <br /> Should Know
//       </Typography>
//       <Box position="relative" mb="72px">
//         <TextField
//           height="76px"
//           sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
//           value={search}
//           onChange={(e) => setSearch(e.target.value.toLowerCase())}
//           placeholder="Search Exercises"
//           type="text"
//         />
//         <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
//           Search
//         </Button>
//       </Box>
//       <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
//         <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
//       </Box>
//     </Stack>
//   );
// };

// export default SearchExercises;

import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography, CircularProgress, Alert } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
        setBodyParts(['all', ...bodyPartsData]);
      } finally {
        // // console.error('Error fetching body parts data:', error);
        // setError('Failed to load body parts');
      }
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      setLoading(true);
      setError('');
      try {
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        const searchedExercises = exercisesData.filter(
          (item) => item.name.toLowerCase().includes(search) || item.target.toLowerCase().includes(search) || item.equipment.toLowerCase().includes(search) || item.bodyPart.toLowerCase().includes(search),
        );

        // console.log('Searched exercises:', searchedExercises);

        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

        setSearch('');
        setExercises(searchedExercises);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Discover New Exercises <br /> To Achieve Your Goals
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{ bgcolor: '#ff2625', color: '#ffffff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }}
          onClick={handleSearch}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Search'}
        </Button>
      </Box>
      {error && <Alert severity="error">{error}</Alert>}
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;

// import React, { useEffect, useState } from 'react';
// import { Box, Button, Stack, TextField, Typography, CircularProgress, Alert } from '@mui/material';

// import { exerciseOptions, fetchData } from '../utils/fetchData';
// import HorizontalScrollbar from './HorizontalScrollbar';

// const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
//   const [search, setSearch] = useState('');
//   const [bodyParts, setBodyParts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchExercisesData = async () => {
//       try {
//         const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
//         setBodyParts(['all', ...bodyPartsData]);
//       } finally {
//         // console.error('Error fetching body parts data:', error);
//         // setError('Failed to load body parts');
//       }
//     };

//     fetchExercisesData();
//   }, []);

//   const handleSearch = async () => {
//     if (search) {
//       setLoading(true);
//       setError('');
//       try {
//         const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
//         const searchedExercises = exercisesData.filter(
//           (item) => item.name.toLowerCase().includes(search) || item.target.toLowerCase().includes(search) || item.equipment.toLowerCase().includes(search) || item.bodyPart.toLowerCase().includes(search),
//         );

//         // console.log('Searched exercises:', searchedExercises);

//         window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

//         setSearch('');
//         setExercises(searchedExercises);
//       // } catch (error) {
//       //   console.error('Error fetching exercises data:', error);
//       //   setError('Failed to load exercises');
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   return (
//     <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
//       <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
//         Discover New Exercises <br /> To Achieve Your Goals
//       </Typography>
//       <Box position="relative" mb="72px">
//         <TextField
//           height="76px"
//           sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
//           value={search}
//           onChange={(e) => setSearch(e.target.value.toLowerCase())}
//           placeholder="Search Exercises"
//           type="text"
//         />
//         <Button
//           className="search-btn"
//           sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }}
//           onClick={handleSearch}
//         >
//           {loading ? <CircularProgress size={24} color="inherit" /> : 'Search'}
//         </Button>
//       </Box>
//       {error && <Alert severity="error">{error}</Alert>}
//       <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
//         <HorizontalScrollbar data={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart} />
//       </Box>
//     </Stack>
//   );
// };

// export default SearchExercises;
