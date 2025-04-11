import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'users';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').notNullable();
            table.string('firstname').nullable();
            table.string('lastname').nullable();
            table.string('email', 255).notNullable().unique();
            table.string('username', 255).notNullable().unique();
            table.string('password').notNullable();
            table.timestamp('created_at').notNullable();
            table.timestamp('updated_at').nullable();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1740667111475_create_users_table.js.map