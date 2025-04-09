import type { HttpContext } from '@adonisjs/core/http'
// import UserProfile from '#models/user_profile';
import Tweet from '#models/tweet';
import User from '#models/user';
import UserFollow from '#models/user_follow';

export default class ProfileController {

    async show({ params, request, view, auth }: HttpContext) {
        //Query params
        let { follow } = request.qs();

        const username = params?.username;
        if (!(await auth.check())) {
            return 'User is not authenticated'; // Or redirect to login
        }

        const profileUser = username ? await User.query().where('username', username).firstOrFail()
            : auth.user!;

        const userTweets = await Tweet.query()
            .where('user_id', profileUser?.id ?? 0)
            .preload('user')
            .orderBy('created_at', 'desc');

        if (follow === 'false') {
            const deleteFollow = await UserFollow.query().delete()
                .where('follower_id', auth.user!.id)
                .where('following_id', profileUser!.id);
        }

        // Check if the current user is following the profile user
        const existingFollow = await UserFollow.query()
            .where('follower_id', auth.user!.id)
            .where('following_id', profileUser!.id)
            .first();
        if (existingFollow) {
            follow = 'true';
        }

        // Get the followers and following count
        const followersCount = await UserFollow.query()
            .where('following_id', profileUser!.id)
            .count('* as count')
            .first();
        const followingCount = await UserFollow.query()
            .where('follower_id', profileUser!.id)
            .count('* as count')
            .first();

        const userFollows = {
            followersCount: followersCount?.$extras.count,
            followingCount: followingCount?.$extras.count
        }

        return view.render('pages/profile', { profileUser, userTweets, follow, userFollows });
    }

    async edit({ params, response }: HttpContext) {
        const username = params?.username;
        // const userProfiles = await UserProfile.query().where('username', username).preload('user');
        console.log(username)

        return response.redirect().withQs({ username }).toPath('/'); //view.render('pages/profile/edit', { username });
    }
} 