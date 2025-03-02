/** this configures the express object for development */

import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('hello, world from typescript');
});

export default app;
