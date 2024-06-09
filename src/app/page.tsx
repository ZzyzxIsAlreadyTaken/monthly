import Link from "next/link";
import RegisterTodayCard from "./_components/registertodaycard";
import { Calendar } from "~/components/ui/calendar";
import HabitCalendar from "./_components/habitcalendar";
import TodaysHabits from "./_components/todayshabits";
import HabitPieDiagram from "./_components/habitpiediagram";
import {
  getHabits,
  getTodaysHabits,
  getUnsortedHabits,
} from "~/server/queries";

// const usersHabits = await getTodaysHabits(1); //
const allHabits = await getHabits();
const unsortedHabits = await getUnsortedHabits();

export default function HomePage() {
  // console.log(usersHabits);
  console.log(allHabits);
  console.log(unsortedHabits);
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#7b91a6] to-[#78c59f] text-white">
      <h1 className="mt-6 text-4xl font-bold">
        Monthly Training Habits Dashboard
      </h1>
      {unsortedHabits.map((habit) => (
        <div key={habit.HabitId}>
          <Link href={`/habit/${habit.HabitId}`}>{habit.HabitName}</Link>
        </div>
      ))}
      <div className="mt-4 flex flex-row gap-2 text-lg">
        <RegisterTodayCard />
        <TodaysHabits />
        <HabitCalendar />
        {/* <HabitPieDiagram /> */}
      </div>
    </main>
  );
}
