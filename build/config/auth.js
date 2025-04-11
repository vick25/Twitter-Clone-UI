import { defineConfig } from '@adonisjs/auth';
import { sessionGuard, sessionUserProvider } from '@adonisjs/auth/session';
import { tokensGuard, tokensUserProvider } from '@adonisjs/auth/access_tokens';
const authConfig = defineConfig({
    default: 'web',
    guards: {
        web: sessionGuard({
            useRememberMeTokens: false,
            provider: sessionUserProvider({
                model: () => import('#models/user'),
            }),
        }),
        api: tokensGuard({
            provider: tokensUserProvider({
                tokens: 'accessTokens',
                model: () => import('#models/user'),
            })
        }),
    },
});
export default authConfig;
//# sourceMappingURL=auth.js.map