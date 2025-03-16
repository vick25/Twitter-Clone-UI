import { tweets, users } from '../../utils/samples.js';
function getTweetsForUser(userId) {
    const userTweets = tweets.filter(tweet => tweet.user === userId);
    return userTweets.reverse();
}
export default class ProfileController {
    async show({ params, view }) {
        const username = params?.username;
        let user;
        if (username)
            user = users.find(u => u.username === username);
        else
            user = users[0];
        const userTweets = getTweetsForUser(user?.id);
        return view.render('pages/profile', { user, userTweets });
    }
}
//# sourceMappingURL=profile_controller.js.map