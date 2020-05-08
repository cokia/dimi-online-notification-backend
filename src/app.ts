/* eslint-disable no-unused-vars */
import express, { Application, Request } from 'express';
import cors from 'cors';
import {subscribeTokenToTopic} from './util/fcm'

interface IRequest extends Request {
  params: {
    token: string;
    topic: string;
  }
}

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

    this.application.post('/topicsub/:topic/:token', async (req: IRequest, res, _) => {
      await subscribeTokenToTopic(req.params.token, req.params.topic);
      res.status(200).send('OK');
    });
  }
}

const app = new App().application;

export default app;
