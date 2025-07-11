import { boolean, integer, pgTable, varchar, timestamp, jsonb } from "drizzle-orm/pg-core";

export const orderTable = pgTable('order_table',{
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar('name', { length: 100}).notNull(),
    email: varchar('email', { length: 100}).notNull().unique(),
    phone: varchar('phone', { length: 100}).notNull(),
    address: varchar('address', { length: 100}).notNull(),
    receivingCountry: varchar('country', { length: 100}).notNull(),
    refund: boolean('refund').notNull().default(false),
    status: varchar('status').notNull().default('Delivering'),
    amount: integer('amount').notNull().default(0),
    parckageWeight: integer('parckage_weight').notNull().default(0),
    sendingCountry: varchar('sending_country',{ length: 50}).notNull(),
    locations: jsonb('locations').$type<Array<string>>().notNull(),
    trackingNumber: varchar('tacking_number').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').notNull().defaultNow()
});

export const adminTable = pgTable('admin_table', {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar('name', { length: 25}).notNull(),
    email: varchar('email', { length: 30}).notNull().unique(),
    password: varchar('password', { length: 250}).notNull(),
    isAdmin: boolean('is_admin').notNull().default(false)
})