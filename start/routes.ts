/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
const ProfileController = () => import('#controllers/profile_controller')
const HomeController = () => import('#controllers/home_controller')
const PostController = () => import('#controllers/posts_controller')
const UserController = () => import('#controllers/user_controller')

const AuthController = () => import('#controllers/auth_controller')
const UserFollowsController = () => import('#controllers/user_follows_controller')
const TweetLikesController = () => import('#controllers/tweet_likes_controller')
const TweetRetweetsController = () => import('#controllers/tweet_retweets_controller')
const TweetCommentsController = () => import('#controllers/tweet_comments_controller')

// API
router.group(
    () => {
        // Tweets routes
        router.get('tweets', [PostController, 'index']).as('api.tweets')
        router.post('tweets', [PostController, 'store']).as('api.tweet')
        // User routes
        router.get('users', [UserController, 'index']).as('api.users')
        router.get('users/:id', [UserController, 'show']).as('api.user')

        router.post('auth/register', [AuthController, 'register']).as('auth.register')
        router.post('auth/login', [AuthController, 'login']).as('auth.login')
        router.post('auth/delete', [AuthController, 'logout']).as('auth.delete').use(middleware.auth())
        router.get('auth/me', [AuthController, 'me']).as('auth.me')
    }
).prefix('api/v1/')

router.group(
    () => {
        router.get('/', [HomeController, 'index']).as('home')

        router.get('/tweets/:id/status', [PostController, 'index'])
        router.post('/', [PostController, 'store']).as('tweet')
        router.get('/profile/:username/edit', [ProfileController, 'edit']).as('editprofile')
        router.post('/follows/:id/follow', [UserFollowsController, 'store']).as('follow')

        router.post('/tweets/:id/like', [TweetLikesController, 'store']).as('like')
        router.delete('/tweets/:id/like', [TweetLikesController, 'destroy']).as('likedestroy')
        router.post('/tweets/:id/retweet', [TweetRetweetsController, 'store']).as('retweet')
        router.delete('/tweets/:id/retweet', [TweetRetweetsController, 'destroy']).as('retweetdestroy')
        router.post('/tweets/:id/comment', [TweetCommentsController, 'store']).as('comment')
    }
).use(middleware.auth())
router.get('/profile/:username?', [ProfileController, 'show']).as('profile')

router.group(
    () => {
        router.get('register', [UserController, 'showRegister'])
        router.post('register', [UserController, 'register']).as('register')
        router.get('login', [UserController, 'showLogin'])
        router.post('login', [UserController, 'login']).as('login')
        router.get('logout', [UserController, 'destroy']).as('logout').use(middleware.auth())
    }
).prefix('auth')

router.get('/test-auth', async ({ auth }) => {
    await auth.check()
    if (!auth.isAuthenticated) {
        return 'Pas connecté'
    }
    const user = auth.user!
    return `Connecté en tant que ${user.username ?? user.email}`
})