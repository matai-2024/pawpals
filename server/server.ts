import express from 'express'
import * as Path from 'node:path'

import petRoutes from './routes/pets.ts'
import ownerRoutes from './routes/owners.ts'
import traitRoutes from './routes/traits.ts'
import eventRoutes from './routes/events.ts'
import ownerAuthRoutes from './routes/ownerAuth.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/owners', ownerRoutes)
server.use('/api/v1/owners/auth', ownerAuthRoutes)
server.use('/api/v1/pets', petRoutes)
server.use('/api/v1/traits', traitRoutes)
server.use('/api/v1/events', eventRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

//bguidshkjg

export default server
