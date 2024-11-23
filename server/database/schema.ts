import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    password: text('password').notNull(),
    avatar: text('avatar').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' })
        .notNull()
        .default(new Date())
})
