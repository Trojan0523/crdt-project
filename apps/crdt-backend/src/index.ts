/*
 * @Author: BuXiongYu
 * @Date: 2023-01-19 11:00:01
 * @LastEditors: BuXiongYu
 * @LastEditTime: 2023-01-19 17:08:26
 * @Description: start up function
 */
import { Server } from '@hocuspocus/server'

export const bootstrap = () => {
  const server = Server.configure({
    port: 80,
  })
  server.listen()
}

bootstrap()
