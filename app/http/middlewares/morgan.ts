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
