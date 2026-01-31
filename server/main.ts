import express from 'express'
import cors from 'cors'
import type { Request, Response } from 'express'
import { toNodeHandler } from 'better-auth/node';
import { auth } from './lib/auth'

const app = express()
const PORT = Number(process.env.PORT) || 8888

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}))

app.use(express.json())

app.all('/api/auth/{*any}', toNodeHandler(auth))


app.get('/', (req: Request, res: Response)=>{
  res.send('hello')
})

app.listen(PORT, ()=>{
  console.log(`http://localhost:${PORT}`)
})