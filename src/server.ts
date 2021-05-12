import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/routes';
import pool from './config/db';

class Server {
  private app;

  constructor() {
    this.app = express();
    this.config();
    this.routerConfig();
    this.dbConnect();
  }

  private config() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json({ limit: '1mb' }));
  }

  private dbConnect() {
    pool.connect((err) => {
      if (err) {
        console.error(err);
      }
      console.log('DB Connected.');
    });
  }

  private routerConfig() {
    this.app.use('/app', router);
  }

  public start = (port: string) => {
    return new Promise((resolve, reject) => {
      this.app
        .listen(port, () => {
          resolve(port);
        })
        .on('error', (err: Object) => reject(err));
    });
  };
}

export default Server;
