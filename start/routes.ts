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

router.get('/', [HomeController, 'index']).as('home').use(middleware.auth())
router.post('/', [PostController, 'store']).as('tweet').use(middleware.auth())
router.on('/tweet').redirect('/')
router.get('/profile/:username?', [ProfileController, 'show']).as('profile')
router.get('/profile/:username/edit', [ProfileController, 'edit']).as('editprofile').use(middleware.auth())
router.group(
    () => {
        router.get('register', [UserController, 'showRegister'])
        router.post('register', [UserController, 'register']).as('register')
        router.get('login', [UserController, 'showLogin'])
        router.post('login', [UserController, 'login']).as('login')
        router.get('logout', [UserController, 'logout']).as('logout').use(middleware.auth())
    }
).prefix('auth')