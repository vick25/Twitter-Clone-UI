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
const UserController = () => import('#controllers/user_controller')

router.get('/', [HomeController, 'index']).as('home').use(middleware.auth())
router.post('/', [HomeController, 'store']).as('tweet')
router.on('/tweet').redirect('/')
router.get('/profile/:username?', [ProfileController, 'show']).as('profile')
router.group(
    () => {
        router.get('register', [UserController, 'showRegister'])
        router.post('register', [UserController, 'register']).as('register')
        router.get('login', [UserController, 'showLogin'])
        router.post('login', [UserController, 'login']).as('login')
        router.get('logout', [UserController, 'logout']).as('logout')
    }
).prefix('auth')