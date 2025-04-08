import User from '#models/user'
import { LoginUserValidator, RegisterUserValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
    async register({ request, response }: HttpContext) {
        try {
            const payload = await request.validateUsing(RegisterUserValidator)
            const user = await User.create(payload)
            const token = await User.accessTokens.create(user)
            return response.status(201).json({
                data: user,
                token,
                message: 'User created successfully',
            })

        } catch (error) {
            return response.status(400).json({ error: error.messages })
        }
    }
    async login({ request, response }: HttpContext) {
        try {
            const { email, password } = await request.validateUsing(LoginUserValidator)
            const user = await User.verifyCredentials(email, password)
            const token = await User.accessTokens.create(user)

            return response.json({ data: user, token })
        } catch (error) {
            return response.status(400).json({ error: error.messages })
        }
    }

    async logout({ auth, response }: HttpContext) {
        const user = auth.user!
        if ('currentAccessToken' in user && user.currentAccessToken) {
            await User.accessTokens.delete(user, user.currentAccessToken.identifier)
        } else {
            return response.status(400).json({ error: 'Current access token not found' })
        }
        return response.status(200).json({ message: "Logged out successfully" })
    }

    async me({ auth }: HttpContext) {
        await auth.check();
        return { user: auth.user }
    }
}