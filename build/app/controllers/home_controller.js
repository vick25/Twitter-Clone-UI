import { tweets, users } from '../../utils/samples.js';
export default class HomeController {
    async index({ view }) {
        const currentUser = users[0];
        return view.render('pages/home', { tweets, currentUser, users });
    }
    async store({ request, response }) {
        try {
            const tweet = request.body().tweet;
            if (tweet.trim() !== '')
                tweets.push({ id: tweets.length + 1, content: tweet, createdAt: new Date(), user: users[0].id });
            response.redirect('/');
        }
        catch (error) {
            response.redirect('/');
        }
    }
}
//# sourceMappingURL=home_controller.js.map