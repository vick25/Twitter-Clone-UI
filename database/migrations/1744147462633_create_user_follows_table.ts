import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'user_follows'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('follower_id').unsigned().notNullable().references('users.id').onDelete('CASCADE')
      table.integer('following_id').unsigned().notNullable().references('users.id').onDelete('CASCADE')
      table.unique(['follower_id', 'following_id'])

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}