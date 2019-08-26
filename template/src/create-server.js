import Koa from 'koa'
import logger from 'koa-logger'

export default async function() {
  const server = new Koa()

  server.use(logger())

  return server
}
