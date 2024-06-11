import { relations, sql } from "drizzle-orm";
import {
  index,
  integer,
  primaryKey,
  sqliteTableCreator,
  text,
  foreignKey,
} from "drizzle-orm/sqlite-core";
import { type AdapterAccount } from "next-auth/adapters";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator((name) => `monthly_${name}`);

export const habits = createTable("Habit", {
  HabitId: integer("HabitId", { mode: "number" }).primaryKey({
    autoIncrement: true,
  }),
  UserId: integer("UserId", { mode: "number" })
    .references(() => users.id)
    .notNull(),
  HabitName: text("HabitName").notNull(),
  Description: text("Description"),
  HabitType: text("HabitType").notNull(),
  Duration: integer("Duration"), // Duration in seconds for timed habits
  Repetitions: integer("Repetitions"), // Number of repetitions per day for repetition habits
});

export const habitlogs = createTable("HabitLog", {
  LogId: integer("LogId", { mode: "number" }).primaryKey({
    autoIncrement: true,
  }),
  HabitId: integer("HabitId")
    .references(() => habits.HabitId)
    .notNull(),
  UserId: integer("UserId", { mode: "number" })
    .references(() => users.id)
    .notNull(),
  Date: integer("Date", { mode: "timestamp" }).notNull(),
  Duration: integer("Duration"), // Duration in minutes for timed habits
  Repetitions: integer("Repetitions"), // Number of repetitions completed for repetition habits
  Status: integer("Status", { mode: "boolean" }).notNull(),
});

export const users = createTable("user", {
  id: text("id", { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  // id: integer("id", { mode: "number" })
  //   .notNull()
  //   .primaryKey({ autoIncrement: true }),
  name: text("name", { length: 255 }),
  email: text("email", { length: 255 }).notNull(),
  emailVerified: integer("emailVerified", {
    mode: "timestamp",
  }).default(sql`CURRENT_TIMESTAMP`),
  image: text("image", { length: 255 }),
});

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
}));

export const accounts = createTable(
  "account",
  {
    userId: text("userId", { length: 255 })
      .notNull()
      .references(() => users.id),
    type: text("type", { length: 255 })
      .$type<AdapterAccount["type"]>()
      .notNull(),
    provider: text("provider", { length: 255 }).notNull(),
    providerAccountId: text("providerAccountId", { length: 255 }).notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type", { length: 255 }),
    scope: text("scope", { length: 255 }),
    id_token: text("id_token"),
    session_state: text("session_state", { length: 255 }),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
    userIdIdx: index("account_userId_idx").on(account.userId),
  }),
);

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, { fields: [accounts.userId], references: [users.id] }),
}));

export const sessions = createTable(
  "session",
  {
    sessionToken: text("sessionToken", { length: 255 }).notNull().primaryKey(),
    userId: text("userId", { length: 255 })
      .notNull()
      .references(() => users.id),
    expires: integer("expires", { mode: "timestamp" }).notNull(),
  },
  (session) => ({
    userIdIdx: index("session_userId_idx").on(session.userId),
  }),
);

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, { fields: [sessions.userId], references: [users.id] }),
}));

export const verificationTokens = createTable(
  "verificationToken",
  {
    identifier: text("identifier", { length: 255 }).notNull(),
    token: text("token", { length: 255 }).notNull(),
    expires: integer("expires", { mode: "timestamp" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  }),
);
