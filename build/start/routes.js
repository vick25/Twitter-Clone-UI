import router from '@adonisjs/core/services/router';
const ProfileController = () => import('#controllers/profile_controller');
const HomeController = () => import('#controllers/home_controller');
router.get('/', [HomeController, 'index']).as('home');
router.post('/', [HomeController, 'store']).as('tweet');
router.on('/tweet').redirect('/');
router.get('/profile/:username?', [ProfileController, 'show']).as('profile');
//# sourceMappingURL=routes.js.map