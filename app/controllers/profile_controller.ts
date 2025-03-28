import type { HttpContext } from '@adonisjs/core/http'
import UserProfile from '#models/user_profile';
import Tweet from '#models/tweet';
import User from '#models/user';

export default class ProfileController {

    async show({ params, view, auth }: HttpContext) {
        const username = params?.username;
        if (!(await auth.check())) {
            return 'User is not authenticated'; // Or redirect to login
        }

        const user = username ? await User.findBy('username', username) : auth.user!;

        const userTweets = await Tweet.query()
            .where('user_id', user?.id ?? 0)
            .preload('user')
            .orderBy('created_at', 'desc');

        return view.render('pages/profile', { user, userTweets });
    }

    async edit({ params, view, auth }: HttpContext) {
        const username = params?.username;
        // const userProfiles = await UserProfile.query().where('username', username).preload('user');
        console.log(username)

        // return view.render('pages/profile/edit', { username });
    }
} 