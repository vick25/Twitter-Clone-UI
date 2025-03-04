import type { HttpContext } from '@adonisjs/core/http'

export default class ProfileController {

    async show({ params, view }: HttpContext) {
        const username = params?.username;
        return view.render('pages/profile');
    }
}