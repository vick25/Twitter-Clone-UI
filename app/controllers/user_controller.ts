import User from '#models/user'
import { LoginUserValidator, RegisterUserValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UserController {

    async showRegister({ view }: HttpContext) {
        return view.render('pages/auth/register')
    }

    async showLogin({ view }: HttpContext) {
        return view.render('pages/auth/login')
    }

    async register({ request, response, auth, session }: HttpContext) {
        try {
            const payload = await request.validateUsing(RegisterUserValidator)

            // Check if email exists in database.
            if (await User.findBy('email', payload.email)) {
                session.flash({ errors: { email: 'Email already exists' } })
                return response.redirect().back()
            }

            const user = await User.create(payload)

            await auth.use('web').login(user)

            session.flash(
                {
                    notification: {
                        type: 'success',
                        message: 'Account created successfully'
                    }
                }
            )

            return response.redirect('/')
        } catch (error) {
            console.error('Validation Error:', error)  // Log the full error
            session.flash({ errors: error.messages }) // Flash the errors to display on the form
            return response.redirect().back()  // Redirect back to the registration form
        }
    }

    async login({ request, response, auth, session }: HttpContext) {
        const { email, password } = await request.validateUsing(LoginUserValidator)

        try {
            const user = await User.verifyCredentials(email, password)
            // if (!user) {
            //     // session.flash({ errors: 'Invalid credentials' }) // Flash the errors to display on the form
            //     session.flash(
            //         {
            //             notification: {
            //                 type: 'error',
            //                 message: 'Invalid credentials'
            //             }
            //         }
            //     )
            //     return response.redirect().back()
            // }
            // Login the user if successful.
            await auth.use('web').login(user)

            session.flash(
                {
                    notification: {
                        type: 'success',
                        message: 'Log in successful'
                    }
                }
            )

            return response.redirect('/')
        } catch (error) {
            session.flash(
                {
                    notification: {
                        type: 'error',
                        message: 'Invalid credentials'
                    }
                }
            )
            return response.redirect().back()
        }
        // Verify the credentials and login the user if successful.
        // const user = await User.findBy('email', email)

    }

    async logout({ auth, response }: HttpContext) {
        await auth.use('web').logout()
        return response.redirect().toPath('/auth/login')
    }
}