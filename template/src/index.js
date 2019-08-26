import createServer from './create-server'
import { logger } from '@/utils'

const HOST = '0.0.0.0'
const PORT = 8080

async function start() {
  logger.info('Create server')
  const server = await createServer()
  server.listen(PORT, HOST)
  logger.info(`Server start at ${HOST}:${PORT}`)
}

start()
