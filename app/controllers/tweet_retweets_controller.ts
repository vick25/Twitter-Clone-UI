import Tweet from '#models/tweet'
import type { HttpContext } from '@adonisjs/core/http'

export default class TweetRetweetsController {
    async store({ params, response, auth }: HttpContext) {
        const tweet = await Tweet.findOrFail(params?.id)
        const user = auth.user!

        if (!user.id) {
            return response.status(401).json({ message: 'Unauthorized' })
        }

        // const tweet = await Tweet.findOrFail(tweetId)

        // Check if the user has already liked the tweet
        const existingLike = await user.hasTweetRetweets(tweet.id)

        if (existingLike) {
            return response.redirect().back()
        } else {
            await user.related('tweetRetweets').attach([tweet.id])
            return response.redirect().back()
        }
    }

    async destroy({ params, response, auth }: HttpContext) {
        const tweet = await Tweet.findOrFail(params?.id)
        const user = auth.user!
        await user.related('tweetRetweets').detach([tweet.id])
        return response.redirect().back()
    }
}