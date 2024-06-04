import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

function TodaysHabits() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-4xl">Tåhev</CardTitle>
        <CardDescription>Øvelse øker med 2 hver dag</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-9xl">29</p>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}

export default TodaysHabits;
