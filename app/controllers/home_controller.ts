import type { HttpContext } from '@adonisjs/core/http'
import { tweets, users } from '../../utils/samples.js';

export default class HomeController {

    async index({ view }: HttpContext) {
        const userTweets = tweets.filter(tweet => tweet.user === users[0].id);
        const currentUser = users[0];
        // console.log(currentUser)
        return view.render('pages/home', { userTweets, currentUser });
    }
}