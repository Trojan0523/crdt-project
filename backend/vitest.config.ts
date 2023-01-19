/*
 * @Author: BuXiongYu
 * @Date: 2023-01-19 11:40:11
 * @LastEditors: BuXiongYu
 * @LastEditTime: 2023-01-19 11:43:05
 * @Description: vitest 配置文件
 */
import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    exclude: [...configDefaults.exclude],
  },
})
