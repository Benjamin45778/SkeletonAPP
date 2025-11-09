const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) =>
  res.json({ ok: true, time: new Date().toISOString() })
);

app.listen(PORT, '0.0.0.0', () =>
  console.log(`API escuchando en ${PORT}`)
);
app.post('/api/login', (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) return res.status(400).json({ ok: false, msg: 'Faltan campos' });
  // Mock: acepta cualquier credencial
  res.json({ ok: true, user: { email }, token: 'fake-123' });
});
