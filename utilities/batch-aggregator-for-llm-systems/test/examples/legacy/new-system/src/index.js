import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

// Modern async/await code
app.get('/api/users', async (req, res) => {
  try {
    const { data } = await axios.get('https://api.example.com/users');
    const processedData = data.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email
    }));
    res.json(processedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Modern route handling with async/await
app.post('/api/users', async (req, res) => {
  try {
    const { data } = await axios.post('https://api.example.com/users', req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Modern server running on port ${port}`);
}); 