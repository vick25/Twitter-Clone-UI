import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'user_profiles'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('user_id').unsigned().notNullable().references('users.id').onDelete('CASCADE')
      table.unique('user_id')
      table.string('profile_picture_url').nullable()
      table.string('biography', 500).nullable()
      table.string('location', 100).nullable()
      table.string('website_url', 100).nullable()
      table.string('birthdate', 10).nullable()
      table.boolean('is_profile_public').defaultTo(true)
      table.boolean('is_email_public').defaultTo(false)
      table.boolean('is_content_public').defaultTo(true)

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}