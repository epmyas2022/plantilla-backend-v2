import morgan from 'morgan'
import { type Request, type Response } from 'express'
import { type middleware } from '../../types/utils'

export const customFormat: middleware = morgan(function (tokens, req: Request, res: Response) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
})

export const defaultFormat: middleware = morgan('dev')

export const combinedFormat: middleware = morgan('combined')

export const commonFormat: middleware = morgan('common')

export const shortFormat: middleware = morgan('short')

export const tinyFormat: middleware = morgan('tiny', {
  skip: (req: Request, res: Response) => {
    console.log(res.statusCode)
    return res.statusCode >= 400
  }
})
