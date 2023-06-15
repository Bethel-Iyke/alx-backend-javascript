import express from 'express';
import controllerRouting from './routes/index';

const app = express();
const port = 1245;

app.use(controllerRouting);

app.listen(port, () => {
  // server running
});

export default app;
