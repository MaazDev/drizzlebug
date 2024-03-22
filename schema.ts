import {
	pgTable,
	varchar
} from 'drizzle-orm/pg-core'

export const UserDrizzle = pgTable('user', {
	id: varchar('id', { length: 255 }).notNull().primaryKey(),
	email: varchar('email', { length: 255 }).notNull(),
    test: varchar('test', { length: 255 }).notNull(),
})