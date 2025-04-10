import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasOne, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasOne, ManyToMany } from '@adonisjs/lucid/types/relations'
import User from '#models/user'

export default class Tweet extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare content: string

  @column()
  declare retweetOf: number | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @hasOne(() => Tweet)
  declare retweet_of: HasOne<typeof Tweet>

  @manyToMany(() => User, {
    pivotTable: 'tweet_likes',
    pivotTimestamps: true
  })
  declare tweetLikes: ManyToMany<typeof User>

  @manyToMany(() => User, {
    pivotTable: 'tweet_retweets',
    pivotTimestamps: true
  })
  declare tweetRetweets: ManyToMany<typeof User>

  @manyToMany(() => User, {
    pivotTable: 'tweet_comments',
    pivotColumns: ['content'],
    pivotTimestamps: true
  })
  declare tweetComments: ManyToMany<typeof User>
}  