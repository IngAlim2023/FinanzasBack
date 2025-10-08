import type { HttpContext } from '@adonisjs/core/http'
import jwt from 'jsonwebtoken'
import env from '#start/env'

export default class ValidateToken {
  async validate({ request, response }: HttpContext, next: () => Promise<void>) {
    try {
      const token = request.cookie(`${env.get('COOKIE_NAME')}`)

      if (!token) {
        return response.status(401).json({ message: 'Token no proporcinado' })
      }

      jwt.verify(token, env.get('APP_KEY'))

      
      await next()
    } catch (e) {
      return response.status(401).json({ message: 'No autorizado' })
    }
  }
}
