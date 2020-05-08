/* eslint-disable no-unused-vars */
import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

class App {
  public application: Application;

  constructor() {
    this.application = express();
    this.initializeMiddlewares();
    this.initializeResponseHeaders();
    this.initializeRouter();
  }

  private initializeMiddlewares() {
    this.application.use(cors());
  }

  private initializeResponseHeaders() {
    this.application.all('/*', (_, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'X-Requested-With');
      next();
    });
  }

  private initializeRouter() {
    this.application.get('/', (_, res) => {
      res.status(200).send('dimi-online-notification api server');
    });
  }
}

const app = new App().application;
const zoomurl = 'zoommtg://us04web.zoom.us/join?action=join&confno=';

export default app;
