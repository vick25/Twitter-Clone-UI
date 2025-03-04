/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const ProfileController = () => import('#controllers/profile_controller')
const HomeController = () => import('#controllers/home_controller')

router.get('/', [HomeController, 'index']).as('home')
router.get('/profile/:username?', [ProfileController, 'show']).as('profile')