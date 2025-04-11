import Tweet from '#models/tweet';
import { TweetValidator } from '#validators/tweet';
import type { HttpContext } from '@adonisjs/core/http'

export default class PostController {

    async index({ request, params, response, view }: HttpContext) {
        const tweetID = params?.id

        if (!request.completeUrl().includes('api')) {
            const tweets = await Tweet.query().where('id', tweetID)
            return view.render('pages/post', { tweets });
        } else {
            const tweets = await Tweet.all()
            return response.json(tweets);
        }
    }

    async store({ request, response, session, auth }: HttpContext) {
        try {
            const { content } = await request.validateUsing(TweetValidator)
            // TODO: Save tweet to database and redirect to home page
            await auth.user!.related('tweets').create({ content });

            session.flash(
                {
                    notification: {
                        type: 'success',
                        message: 'Tweet posted.'
                    }
                }
            )
            return response.redirect('/');
        } catch (error) {
            session.flash({ error: error.message = 'Veuillez remplir ce champ.' });
            return response.redirect('/');
        }
    }
} 