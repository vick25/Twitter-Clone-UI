import Tweet from '#models/tweet'
import type { HttpContext } from '@adonisjs/core/http'

export default class TweetLikesController {
    async store({ params, response, auth }: HttpContext) {
        const tweet = await Tweet.findOrFail(params?.id)
        const user = auth.user!

        if (!user.id) {
            return response.status(401).json({ message: 'Unauthorized' })
        }

        // const tweet = await Tweet.findOrFail(tweetId)

        // Check if the user has already liked the tweet
        const existingLike = await user.hasTweetLikes(tweet.id) //!!(await tweet.related('tweetLikes').query().where('user_id', user.id).first())

        if (existingLike) {
            return response.redirect().back()
        } else {
            await user.related('tweetLikes').attach([tweet.id])
            return response.redirect().back()
        }
    }

    async destroy({ params, response, auth }: HttpContext) {
        const tweet = await Tweet.findOrFail(params?.id)
        const user = auth.user!
        await user.related('tweetLikes').detach([tweet.id])
        return response.redirect().back()
    }
}