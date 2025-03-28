import type { HttpContext } from '@adonisjs/core/http'
import { tweets, User, Tweet, users } from '../../utils/samples.js';
import UserProfile from '#models/user_profile';
// import User from '#models/user';

function getTweetsForUser(userId: number): Tweet[] {
    const userTweets = tweets.filter(tweet => tweet.user === userId);
    return userTweets.reverse();
}

export default class ProfileController {

    async show({ params, view, auth }: HttpContext) {
        const username = params?.username;
        let user: User;
        if (username)
            user = users.find(u => u.username === username) as User
        else
            user = users[0]

        const userTweets = getTweetsForUser(user?.id);
        // console.log(userTweets)
        return view.render('pages/profile', { user, userTweets });
    }

    async edit({ params, view, auth }: HttpContext) {
        const username = params?.username;
        // const userProfiles = await UserProfile.query().where('username', username).preload('user');
        console.log(username)

        // return view.render('pages/profile/edit', { username });
    }
} 