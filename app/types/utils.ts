import { type Router, type NextFunction, type Request, type Response } from 'express'

export type middleware = (req: Request, res: Response, next: NextFunction) => void
export interface route {
  path: string
  router: Router
}
export type controller = Record<string, (req: Request, res: Response) => void>

export interface pathController {
  path: string
  method: string
}
