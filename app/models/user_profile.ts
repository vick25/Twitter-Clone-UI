import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from '#models/user'

export default class UserProfile extends BaseModel {
  @column({ isPrimary: true })
  declare userId: number

  @column()
  declare profilePictureUrl: string | null

  @column()
  declare biography: string | null

  @column()
  declare location: string | null

  @column()
  declare websiteUrl: string | null

  @column.date()
  declare birthdate: DateTime | null

  @column()
  declare isProfilePublic: boolean

  @column()
  declare isContentPublic: boolean

  @column()
  declare isEmailPublic: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}