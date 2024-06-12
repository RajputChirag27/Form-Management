// app.ts
import 'reflect-metadata'
import express from 'express'
import { InversifyExpressServer } from 'inversify-express-utils'
import {container} from './config'
import swaggerUi from 'swagger-ui-express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
const result = dotenv.config()
import path from 'path'
import cors from 'cors'

// Set up mongoose connection
import dbConfig from './config/dbConfig'
dbConfig;


const port = process.env.PORT || 3000
const allowedOrigins = ['http://localhost:4200', 'https://task1-angular-psi.vercel.app', 'https://6669db214b9a6505ee7a9f03--genuine-tartufo-44cb79.netlify.app'];
const corsOptions = {
  origin: (origin : any, callback : any) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};
const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(cors())


// app.use(express.static(path.join(__dirname, '../../test/dist/test')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../test/dist/test/index.html'));
// });

// Set up InversifyExpressServer
const server = new InversifyExpressServer(
  container,
  null,
  { rootPath: '/'},
  app
)

const appConfigured = server.build()

appConfigured.listen(port, () => {
  console.log('Server is running on port ' + port)
})

export default app;