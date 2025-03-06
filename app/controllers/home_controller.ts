import type { HttpContext } from '@adonisjs/core/http'

type Tweet = {
    id: number;
    content: string;
    createdAt: Date;
    user?: number;
}

export type User = {
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    avatar: string;
    bio: string;
    createdAt: Date;
}

export const tweets: Tweet[] = [
    { id: 1, content: 'Developpeur fullstack from Kadea', createdAt: new Date(), user: 3 },
    { id: 2, content: 'AdonisJS framework avec le Coach Sacré', createdAt: new Date(), user: 2 },
    { id: 3, content: 'Apprendre COBOL pour gagner plus', createdAt: new Date(), user: 1 },
]

export const users: User[] = [
    { id: 1, firstname: 'Victor', lastname: 'Kadiata', username: 'vick25', avatar: 'https://example.com/avatar1.jpg', bio: 'Le framework AdonisJS', createdAt: new Date() },
    { id: 2, firstname: 'Sacré', lastname: 'Mbiku', username: 'coachsacre', avatar: 'https://example.com/avatar2.jpg', bio: 'Le Coach Sacré', createdAt: new Date() },
    { id: 3, firstname: 'Alexis', lastname: 'Kabongo', username: 'kadea', avatar: 'https://example.com/avatar3.jpg', bio: 'Kadea', createdAt: new Date() },
    { id: 4, firstname: 'Rosalie', lastname: 'Fayulu', username: 'adonisjs-community', avatar: 'https://example.com/avatar4.jpg', bio: 'Communauté AdonisJS', createdAt: new Date() },
]

export default class HomeController {
    async index({ view }: HttpContext) {
        return view.render('pages/home', { tweets });
    }
}