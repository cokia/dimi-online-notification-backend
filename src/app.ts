/* eslint-disable no-unused-vars */
import express, { Application, Request } from 'express';
import cors from 'cors';
import { subscribeTokenToTopic, fcmsend } from './util/fcm';

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

    this.application.get('/test/:topic', async (req, res, _) => {
      await fcmsend('1-3토픽에 대한', '테스트메시지입니다.', 'zoommtg://zoom.us/join?action=join&confno=4332940405', '13');
      res.status(200).send('OK');
    });
  }
}

const app = new App().application;

export default app;
