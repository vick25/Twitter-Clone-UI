import type { HttpContext } from '@adonisjs/core/http'
import Tweet from '#models/tweet';

export default class HomeController {

    async index({ view }: HttpContext) {
        const tweets = await Tweet.query().orderBy('created_at', 'desc').preload('user')
            .withCount('tweetLikes')
            .withCount('tweetRetweets')
            .withCount('tweetComments');

        return view.render('pages/home', { tweets });
    }
}