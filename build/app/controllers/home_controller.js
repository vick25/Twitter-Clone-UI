import Tweet from '#models/tweet';
export default class HomeController {
    async index({ view }) {
        const tweets = await Tweet.query().orderBy('created_at', 'desc').preload('user')
            .withCount('tweetLikes')
            .withCount('tweetRetweets')
            .withCount('tweetComments');
        return view.render('pages/home', { tweets });
    }
}
//# sourceMappingURL=home_controller.js.map