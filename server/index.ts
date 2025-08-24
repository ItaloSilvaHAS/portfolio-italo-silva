import express from 'express';
import { createServer } from 'vite';

const app = express();

app.get('/api/test', (req, res) => {
  res.json({ message: 'Funcionando!' });
});

const vite = await createServer({
  root: './client',
  server: { middlewareMode: true }
});

app.use(vite.ssrFixStacktrace);
app.use(vite.middlewares);

app.listen(5000, () => {
  console.log('✅ http://localhost:5000');
});