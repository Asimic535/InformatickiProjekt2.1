const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = 3030;

app.use(cors());

const europskiPobjednici = [
  { id: 1, godina: 1960, zemlja: 'Sovjetski Savez', pobjede: 1, informacije: 'Prvi pobjednik Europskog prvenstva.' },
  { id: 2, godina: 1964, zemlja: 'Španjolska', pobjede: 3, informacije: 'Pobjednik 1964., 2008., 2012.' },
  { id: 3, godina: 1968, zemlja: 'Italija', pobjede: 2, informacije: 'Pobjednik 1968., 2020.' },
  { id: 4, godina: 1972, zemlja: 'Zapadna Njemačka', pobjede: 3, informacije: 'Pobjednik 1972., 1980., 1996.' },
  { id: 5, godina: 1976, zemlja: 'Čehoslovačka', pobjede: 1, informacije: 'Pobjednik 1976.' },
  { id: 6, godina: 1980, zemlja: 'Zapadna Njemačka', pobjede: 3, informacije: 'Pobjednik 1972., 1980., 1996.' },
  { id: 7, godina: 1984, zemlja: 'Francuska', pobjede: 2, informacije: 'Pobjednik 1984., 2000.' },
  { id: 8, godina: 1988, zemlja: 'Nizozemska', pobjede: 1, informacije: 'Pobjednik 1988.' },
  { id: 9, godina: 1992, zemlja: 'Danska', pobjede: 1, informacije: 'Pobjednik 1992.' },
  { id: 10, godina: 1996, zemlja: 'Njemačka', pobjede: 3, informacije: 'Pobjednik 1972., 1980., 1996.' },
  { id: 11, godina: 2000, zemlja: 'Francuska', pobjede: 2, informacije: 'Pobjednik 1984., 2000.' },
  { id: 12, godina: 2004, zemlja: 'Grčka', pobjede: 1, informacije: 'Pobjednik 2004.' },
  { id: 13, godina: 2008, zemlja: 'Španjolska', pobjede: 3, informacije: 'Pobjednik 1964., 2008., 2012.' },
  { id: 14, godina: 2012, zemlja: 'Španjolska', pobjede: 3, informacije: 'Pobjednik 1964., 2008., 2012.' },
  { id: 15, godina: 2016, zemlja: 'Portugal', pobjede: 1, informacije: 'Pobjednik 2016.' },
  { id: 16, godina: 2020, zemlja: 'Italija', pobjede: 2, informacije: 'Pobjednik 1968., 2020.' }
];

app.get('/api/data', (req, res) => {
  res.json(europskiPobjednici);
});

const PEXELS_API_KEY = 'U1RHZVuVXIjfoUMoZLgpRhMA82YHufY8RRVlFvIzbYzSokFhTU1C0HLp';

app.get('/api/pexels', async (req, res) => {
  try {
    const response = await axios.get('https://api.pexels.com/v1/curated', {
      headers: {
        Authorization: PEXELS_API_KEY
      },
      params: {
        per_page: 30
      }
    });
    res.json(response.data.photos);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from Pexels' });
  }
});


app.listen(PORT, () => {
  console.log(`Server radi na http://localhost:${PORT}`);
});
