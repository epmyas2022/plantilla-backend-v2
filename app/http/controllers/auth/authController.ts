import { type Request, type Response } from 'express'
import Controller from '../controller'

export default class AuthController extends Controller {
  static login = async (req: Request, res: Response): Promise<void> => {
    res.send('Login')
  }

  static hello = async (req: Request, res: Response): Promise<void> => {
    res.send('Hello world!')
  }
}
