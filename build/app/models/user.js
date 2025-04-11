var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { DateTime } from 'luxon';
import hash from '@adonisjs/core/services/hash';
import { compose } from '@adonisjs/core/helpers';
import { BaseModel, column, hasMany, manyToMany } from '@adonisjs/lucid/orm';
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid';
import Tweet from '#models/tweet';
import UserProfile from '#models/user_profile';
import UserFollow from '#models/user_follow';
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens';
const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
    uids: ['email'],
    passwordColumnName: 'password',
});
export default class User extends compose(BaseModel, AuthFinder) {
    get handle() {
        return `@${this.username}`;
    }
    async hasTweetLikes(tweetId) {
        const self = this;
        return !!(await self.related('tweetLikes').query().where('tweet_id', tweetId).first());
    }
    async hasTweetRetweets(tweetId) {
        const self = this;
        return !!(await self.related('tweetRetweets').query().where('tweet_id', tweetId).first());
    }
    static accessTokens = DbAccessTokensProvider.forModel(User, {
        expiresIn: '30 days',
        prefix: 'oat_',
        table: 'auth_access_tokens',
        type: 'auth_token',
        tokenSecretLength: 40,
    });
}
__decorate([
    column({ isPrimary: true }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], User.prototype, "firstname", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], User.prototype, "lastname", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    column({ serializeAs: null }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    column.dateTime({ autoCreate: true }),
    __metadata("design:type", DateTime)
], User.prototype, "createdAt", void 0);
__decorate([
    column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", Object)
], User.prototype, "updatedAt", void 0);
__decorate([
    hasMany(() => Tweet),
    __metadata("design:type", Object)
], User.prototype, "tweets", void 0);
__decorate([
    hasMany(() => UserFollow),
    __metadata("design:type", Object)
], User.prototype, "userFollows", void 0);
__decorate([
    manyToMany(() => Tweet, {
        pivotColumns: ['content'],
        pivotTimestamps: true
    }),
    __metadata("design:type", Object)
], User.prototype, "userTweetComments", void 0);
__decorate([
    manyToMany(() => Tweet, {
        pivotTable: 'tweet_likes',
        pivotTimestamps: true
    }),
    __metadata("design:type", Object)
], User.prototype, "tweetLikes", void 0);
__decorate([
    manyToMany(() => Tweet, {
        pivotTable: 'tweet_retweets',
        pivotTimestamps: true
    }),
    __metadata("design:type", Object)
], User.prototype, "tweetRetweets", void 0);
__decorate([
    manyToMany(() => Tweet, {
        pivotTable: 'tweet_comments',
        pivotColumns: ['content'],
        pivotTimestamps: true
    }),
    __metadata("design:type", Object)
], User.prototype, "tweetComments", void 0);
__decorate([
    hasMany(() => UserProfile),
    __metadata("design:type", Object)
], User.prototype, "profiles", void 0);
//# sourceMappingURL=user.js.map