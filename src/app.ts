/* eslint-disable no-unused-vars */
import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

class App {
  public application: Application;

  constructor() {
    this.application = express();
  }
}

const app = new App().application;
const zoomurl = 'zoommtg://zoom.us/join?action=join&confno=';

app.use(cors());

app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});


app.get('/', (req, res) => {
  res.status(200).send('dimi-online-notification api server');
});
