import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Checkbox } from "~/components/ui/checkbox";
import { getTodaysHabits } from "~/server/queries";

interface Habit {
  id: number;
  name: string;
  description: string;
  checked?: boolean;
}

// Create dummy data for the habits
const habits = [
  {
    id: 1,
    name: "Tåhev",
    description: "25 + 1 hver dag",
  },
  {
    id: 2,
    name: "Dips",
    description: "15 + 1 hver dag",
  },
  {
    id: 3,
    name: "Knebøy",
    description: "25 og stigende",
  },
];

function getHabits() {
  return habits;
}

function Habit({ Habit }: { Habit: Habit }) {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-checked:line-through peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {Habit.name}
        </label>
        <p className="text-muted-foreground text-sm">{Habit.description} </p>
      </div>
    </div>
  );
}

function TodaysHabits() {
  return (
    <Card className="min-w-60 bg-opacity-30">
      <CardHeader>
        <CardTitle className="text-4xl text-white">Dagens økter</CardTitle>
        <CardDescription className="text-white">Dagens økter</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {habits.map((habit) => (
            <Habit key={habit.id} Habit={habit} />
          ))}
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}

export default TodaysHabits;
