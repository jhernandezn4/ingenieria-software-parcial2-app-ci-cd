import express from 'express';
import path from 'path';

const app = express();
const __dirname = new URL('.', import.meta.url).pathname;

app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on ${port}`));