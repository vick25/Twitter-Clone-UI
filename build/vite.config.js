import { defineConfig } from 'vite';
import adonisjs from '@adonisjs/vite/client';
export default defineConfig({
    plugins: [
        adonisjs({
            entrypoints: ['resources/css/app.css', 'resources/js/app.js'],
            reload: ['resources/views/**/*.edge'],
        }),
    ],
    build: {
        manifest: true
    }
});
//# sourceMappingURL=vite.config.js.map