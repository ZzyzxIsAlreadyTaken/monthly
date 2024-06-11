import { SmilePlus } from "lucide-react";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

function RegisterTodayCard() {
  return (
    <Card className="bg-transparent">
      <CardHeader>
        <CardTitle>I dag</CardTitle>
        <CardDescription>Legg til dagens økt</CardDescription>
      </CardHeader>
      <CardContent>
        <SmilePlus></SmilePlus>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}

export default RegisterTodayCard;
