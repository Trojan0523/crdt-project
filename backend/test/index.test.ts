/*
 * @Author: BuXiongYu
 * @Date: 2023-01-19 11:38:24
 * @LastEditors: BuXiongYu
 * @LastEditTime: 2023-01-19 11:48:02
 * @Description: 测试文件
 */
import { describe, expect, it } from 'vitest'
import { returnOne } from '../src/utils'

describe('工具类函数测试', () => {
  it('第一个创建的return函数返回值为1', () => {
    const returnResult = returnOne()
    expect(returnResult).to.eq(1)
  })
})
