import type { HttpContext } from '@adonisjs/core/http'
import { tweets, users } from '../../utils/samples.js';

export default class HomeController {

    async index({ view }: HttpContext) {
        const userTweets = tweets.filter(tweet => tweet.user === users[0].id).reverse();
        const currentUser = users[0];
        return view.render('pages/home', { userTweets, currentUser });
    }

    async store({ request, response }: HttpContext) {
        try {
            const tweet: string = request.body().tweet;
            if (tweet.trim() !== '')
                tweets.push({ id: tweets.length + 1, content: tweet, createdAt: new Date(), user: users[0].id });

            response.redirect('/');
        } catch (error) {
            response.redirect('/');
        }
    }
}