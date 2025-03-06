import type { HttpContext } from '@adonisjs/core/http'
import { User, users } from './home_controller.js';

export default class ProfileController {

    async show({ params, view }: HttpContext) {
        const username = params?.username;
        let user: User;
        if (username)
            user = users.find(u => u.username === username) as User
        else
            user = users[0]
        console.log(user)
        return view.render('pages/profile', { user });
    }
} 