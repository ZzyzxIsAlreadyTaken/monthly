import Link from "next/link";
import RegisterTodayCard from "./_components/registertodaycard";
import { Calendar } from "~/components/ui/calendar";
import HabitCalendar from "./_components/habitcalendar";
import TodaysHabits from "./_components/todayshabits";

export default function HomePage() {
  return (
    <main className="text-red flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#7b91a6] to-[#78c59f] text-white">
      <h1 className="text-4xl font-bold">
        Welcome to the Monthly Training Habits
      </h1>
      <div className="mt-4 flex flex-row gap-2 text-lg">
        <RegisterTodayCard />
        <TodaysHabits />
        <HabitCalendar />
      </div>
    </main>
  );
}
