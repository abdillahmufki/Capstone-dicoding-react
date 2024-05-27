import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.get('/dashboard', (req, res) => {
    res.send('Hello, Dashboard');
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
