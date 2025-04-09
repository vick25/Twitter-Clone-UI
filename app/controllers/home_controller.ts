import type { HttpContext } from '@adonisjs/core/http'
import { users } from '../../utils/samples.js';
import Tweet from '#models/tweet';

// function getUserFromTweet(userTweetID?: number) : User | undefined{
//     const userTweet = users.find(user => user.id === userTweetID);
//     return userTweet;
// }

export default class HomeController {

    async index({ view }: HttpContext) {

        const tweets = await Tweet.query().orderBy('created_at', 'desc').preload('user')
            .withCount('tweetLikes');
        // const userTweets = tweets.filter(tweet => tweet.user === users[0].id).reverse();
        const currentUser = users[0];
        return view.render('pages/home', { tweets, currentUser, users });
    }
}