require('dotenv').config()

import app from './config/express';
import { logger } from './utils/logger';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  logger.info(`server is running on port ${PORT}`);
});
