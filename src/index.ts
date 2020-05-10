import app from './app';
import { registerSchedulers } from './util/cron';

app.listen(
  3128,
  () => {
    console.info('✅ Started Dimi Online Notification Server');
    console.info('⏰ Running on: http://localhost:3128');
    registerSchedulers();
  },
);
