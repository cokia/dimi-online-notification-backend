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

app.use(cors());
app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});


app.get('/', (req, res) => {
  res.status(200).send('dimi-online-notification api server');
});

app.get('/getimage/:grade/:class', (req, res) => {
// 준호선배가 이미지 그리는 로직 만들어줄거라고 믿고있어요 ~~~ ㅎㅎ
});

app.get('/gettodaytt/:grade/:class', (req, res) => {
// 오늘의 타임스템프
});

app.get('/subscription/:grade/:class', (req, res) => {
  // 오늘의 타임스템프
});
