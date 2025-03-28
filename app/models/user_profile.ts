import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from '#models/user'

export default class UserProfile extends BaseModel {
  @column({ isPrimary: true })
  declare userId: number

  @column()
  declare profile_picture_url: string

  @column()
  declare biography: string

  @column()
  declare location: string

  @column()
  declare website_url: string

  @column.date()
  declare birthdate: DateTime

  @column()
  declare is_profile_public: boolean

  @column()
  declare is_content_public: boolean

  @column()
  declare is_email_public: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}