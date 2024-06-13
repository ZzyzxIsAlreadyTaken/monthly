"use client";

import { BadgePlus } from "lucide-react";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";

const formSchema = z.object({
  habit: z.string().min(2, {
    message: "økttittel må være minst 2 tegn langt",
  }),
  habitDescription: z.string().min(2, {
    message: "Øktbeskrivelse må være minst 2 tegn langt",
  }),
});

function NewHabitForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      habit: "",
      habitDescription: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="habit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Økttittel</FormLabel>
              <FormControl>
                <Input placeholder="knebøy" {...field} />
              </FormControl>
              <FormDescription>
                Eksempel på økttittel: Knebøy 25kg 5x5
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="habitDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Øktbeskrivelse</FormLabel>
              <FormControl>
                <Input placeholder="bla bla bla ukeblad....." {...field} />
              </FormControl>
              <FormDescription>
                Blblabla husk å drikke vann og spise sunt
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

function CreateHabit() {
  return (
    <Card className="bg-transparent">
      <CardHeader>
        <CardTitle>Ny økt</CardTitle>
        <CardDescription>Legg til en ny økt til øktsamlinga</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <Dialog>
          <DialogTrigger>
            <BadgePlus size={128} fill="white" className="flex-1" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Registrer økt</DialogTitle>
              <DialogDescription>
                Fyll ut skjemaet for å legge til en ny økt.
              </DialogDescription>
            </DialogHeader>
            <NewHabitForm />
          </DialogContent>
        </Dialog>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}

export default CreateHabit;
