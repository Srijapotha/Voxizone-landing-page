"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "./button";
import SectionHead from "./common/SectionHead";

import Social from "./social";

const formSchema = z.object({
  name: z
    .string({
      required_error: "Please enter your name",
    })
    .min(1, "Please enter email"),
  email: z
    .string({
      required_error: "Please enter email",
    })
    .email("Please enter valid email")
    .min(1, "Please enter email"),
  company: z
    .string({
      required_error: "Please enter your company's name",
    })
    .min(1, "Please enter your company's name"),
  message: z
    .string({
      required_error: "Please enter your message",
    })
    .min(1, "Please enter your message"),
});

export type LoginUser = z.infer<typeof formSchema>;

export function ContactForm() {
  const form = useForm<LoginUser>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(values: LoginUser) {
    console.log(values);
    try {
      console.log("submitted form", values);
    } catch (e) {}
  }

  return (
    <Form {...form}>
      <div className="relative z-20 mx-auto flex w-full items-center justify-center px-4 py-4 sm:px-6 lg:flex-none lg:px-20 lg:py-12 xl:px-24">
        <div className="w-full max-w-lg">
          <SectionHead
            title="Contact Us"
            description="We're here to help—reach out to us anytime."
          />

          <div className="py-10">
            <div>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-500"
                      >
                        Full Name
                      </label>
                      <FormControl>
                        <div className="mt-2">
                          <input
                            id="name"
                            type="text"
                            placeholder="John doe"
                            required
                            className="shadow-aceternity block w-full rounded-md border-0 bg-white px-4 py-1.5 text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:bg-neutral-900 dark:text-white sm:text-sm sm:leading-6"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-500"
                      >
                        Email address
                      </label>
                      <FormControl>
                        <div className="mt-2">
                          <input
                            id="email"
                            type="email"
                            placeholder="hello@johndoe.com"
                            required
                            className="shadow-aceternity block w-full rounded-md border-0 bg-white px-4 py-1.5 text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:bg-neutral-900 dark:text-white sm:text-sm sm:leading-6"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-500"
                      >
                        Company
                      </label>
                      <FormControl>
                        <div className="mt-2">
                          <input
                            id="company"
                            type="text"
                            placeholder="Voxizo media labs"
                            required
                            className="shadow-aceternity block w-full rounded-md border-0 bg-white px-4 py-1.5 text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:bg-neutral-900 dark:text-white sm:text-sm sm:leading-6"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-500"
                      >
                        Message
                      </label>
                      <FormControl>
                        <div className="mt-2">
                          <textarea
                            rows={5}
                            id="message"
                            placeholder="Enter your message here"
                            required
                            className="shadow-aceternity block w-full rounded-md border-0 bg-white px-4 py-1.5 text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:bg-neutral-900 dark:text-white sm:text-sm sm:leading-6"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div>
                  <Button as={"button"} className="w-full" type="submit">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
          <Social />
        </div>
      </div>
    </Form>
  );
}
