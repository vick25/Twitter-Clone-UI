import User from '#models/user';
import UserFollow from '#models/user_follow'
import type { HttpContext } from '@adonisjs/core/http'

export default class UserFollowsController {
    async store({ params, auth, response }: HttpContext) {
        await auth.check();
        try {
            // Check if the user is already following the user
            const existingFollow = await UserFollow.query()
                .where('follower_id', auth.user!.id)
                .where('following_id', params?.id)
                .first();
            if (existingFollow) {
                return response.redirect().withQs({ follow: 'false' }).back();
            }

            const userFollowing = await User.findBy('id', params?.id)
            await UserFollow.create({
                follower_id: auth.user!.id,
                following_id: userFollowing!.id
            })
            return response.redirect().withQs({ follow: 'true' }).back();
        } catch (error) {
            console.error(error);
            return response.redirect().back();
        }
    }
}  