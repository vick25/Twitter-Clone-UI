import type { HttpContext } from '@adonisjs/core/http'

type Tweet = {
    id: number,
    content: string,
    createdAt: Date,
}

const tweets: Tweet[] = [
    { id: 1, content: 'Developpeur fullstack from Kadea', createdAt: new Date() },
    { id: 2, content: 'AdonisJS framework avec le Coach Sacré', createdAt: new Date() },
]

export default class HomeController {
    async index({ view }: HttpContext) {
        return view.render('pages/home', { tweets });
    }
}