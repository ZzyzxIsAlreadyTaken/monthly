import Link from "next/link";
import RegisterTodayCard from "./_components/registertodaycard";
import { Calendar } from "~/components/ui/calendar";
import HabitCalendar from "./_components/habitcalendar";
import TodaysHabits from "./_components/todayshabits";
import HabitPieDiagram from "./_components/habitpiediagram";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#7b91a6] to-[#78c59f] text-white">
      <h1 className="mt-6 text-4xl font-bold">
        Monthly Training Habits Dashboard
      </h1>
      <div className="mt-4 flex flex-row gap-2 text-lg">
        <RegisterTodayCard />
        <TodaysHabits />
        <HabitCalendar />
        <HabitPieDiagram />
      </div>
    </main>
  );
}
