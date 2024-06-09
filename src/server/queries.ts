// add a query that adds a new habit to the database using drizzle-orm
// export const addHabit = sql`
import "server-only";
import { db } from "~/server/db";

export async function getHabits() {
  const habits = await db.query.habits.findMany({
    orderBy: (habitName, { asc }) => asc(habitName.HabitName),
  });
  return habits;
}

export async function getUnsortedHabits() {
  const habits = await db.query.habits.findMany();
  return habits;
}

export async function getTodaysHabits(userId: number) {
  // Assuming db.query.habitlogs.findMany expects an object for the where clause
  const habits = await db.query.habitlogs.findMany({
    with: {
      userId: userId,
    },
  });
  return habits; // Correct the return variable name
}
