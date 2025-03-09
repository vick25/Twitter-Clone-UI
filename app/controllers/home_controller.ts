import type { HttpContext } from '@adonisjs/core/http'
import { tweets, User, users } from '../../utils/samples.js';

function getUserFromTweet(userTweetID?: number) {
    const userTweet = users.find(user => user.id === userTweetID);
    return userTweet;
}

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