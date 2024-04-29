import express, { Response, Request } from 'express';
import { helmet, cors, morgan } from './middlewares/index';
import router from './router/router';

//Server
const app = express();

//Middlewares
app.use(helmet);
app.use(cors);
app.use(morgan);
app.use(express.json());

//Routes
app.get('/', (req: Request, res: Response) => {
  return res.send('MS root');
});
app.use('/ms', router);

export default app;
