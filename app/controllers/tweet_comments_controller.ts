import { TweetValidator } from '#validators/tweet'
import type { HttpContext } from '@adonisjs/core/http'

export default class TweetCommentsController {
    async store({ request, params, response, auth }: HttpContext) {
        try {
            const user = auth.user!
            const tweetID = params?.id
            const { content } = await request.validateUsing(TweetValidator)

            // console.log(user.id, { tweetID }, { content })

            await user.related('tweetComments').attach({
                [tweetID]: {
                    content
                },
            })

            response.redirect().back()
        } catch (error) {
            response.redirect().back()
        }
    }
}