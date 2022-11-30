const cors = require('cors');
const express = require('express');
const app = express();
const data = require('./data.json');

const PORT = process.env.PORT || 3001;

// I put this line to bypass security and get access to my server port 3001
app.use(
  cors({
    origin: '*',
    optionsSuccessStatus: 200
  })
);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/interventions', (req, res) => {
  res.json(data);
});
