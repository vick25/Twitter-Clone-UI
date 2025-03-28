import type { HttpContext } from '@adonisjs/core/http'
import { tweets, users } from '../../utils/samples.js';

// function getUserFromTweet(userTweetID?: number) : User | undefined{
//     const userTweet = users.find(user => user.id === userTweetID);
//     return userTweet;
// }

export default class HomeController {

    async index({ view }: HttpContext) {
        // const userTweets = tweets.filter(tweet => tweet.user === users[0].id).reverse();
        const currentUser = users[0];
        return view.render('pages/home', { tweets, currentUser, users });
    }
}