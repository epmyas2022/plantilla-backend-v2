import { type Request, type Response } from 'express'
import BaseController from '../controller'
import { controller, httpGet } from 'inversify-express-utils'
import { AuthService } from '../../services/authService'

@controller('/auth')
export class AuthController extends BaseController {
  constructor (private readonly authService: AuthService) {
    super()
  }

  @httpGet('/')
  async hello (req: Request, res: Response): Promise<Response> {
    return res.json(await this.authService.hello())
  }
}
