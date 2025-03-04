"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Url } from "@/constants/urls";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "./button";
import SectionHead from "./common/SectionHead";

import FormInput from "./ui/form-input";
import { GoogleAds, MetaAds, TiktokAds } from "./partners";

const formSchema = z.object({
  firstName: z
    .string({
      required_error: "First name is required",
    })
    .min(1, "First name cannot be empty"),
  lastName: z
    .string({
      required_error: "Last name is required",
    })
    .min(1, "Last name cannot be empty"),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Please enter a valid email address"), // Email validation
  phone: z
    .string({
      required_error: "Phone number is required",
    })
    .regex(/^[\d\s()+-]+$/, "Please enter a valid phone number"), // Basic phone validation
  company: z
    .string({
      required_error: "Company name is required",
    })
    .min(1, "Company name cannot be empty"),
  country: z
    .string({
      required_error: "Country is required",
    })
    .min(1, "Country cannot be empty"),
  budget: z
    .string({
      required_error: "Budget is required",
    })
    .regex(/^\d+(\.\d{1,2})?$/, "Budget should be a valid amount"), // Accept numbers with up to 2 decimal places
  platform: z
    .string({
      required_error: "Please select a platform",
    })
    .refine(
      (value) => ["web", "mobile", "desktop"].includes(value), // Replace with actual options
      {
        message: "Invalid platform selected",
      },
    ),
  goals: z
    .string({
      required_error: "Goals are required",
    })
    .min(10, "Goals must be at least 10 characters long"), // Minimum description length
});

export type LoginUser = z.infer<typeof formSchema>;

function WarningMessage() {
  return (
    <>
      <div className="rounded-xl bg-yellow-500/5 p-4 text-center text-yellow-600">
        <p className="mb-3">
          Due to a technical issue, we are not accepting data at the moment. You
          can contact us on WhatsApp, and we will let you know when we&apos;re
          back.
        </p>
        <Button
          href={Url.Whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          className="w-max"
        >
          Contact on Whatsapp
        </Button>
      </div>
    </>
  );
}
export function OnboardForm() {
  const form = useForm<LoginUser>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      country: "",
      budget: "",
      goals: "",
      platform: "",
    },
  });

  const radios = [
    {
      name: "Google Ads",
      key: "googleAds",
      icon: <GoogleAds />,
    },
    {
      name: "Meta Ads",
      key: "metaAds",
      icon: <MetaAds />,
    },
    {
      name: "Tiktok Ads",
      key: "tiktokAds",
      icon: <TiktokAds />,
    },
  ];
  const budget = [
    { id: "range_1", content: "Under $10,000" },
    { id: "range_2", content: "$10,000 - $25,000" },
    { id: "range_3", content: "$25,000 - $100,000" },
    { id: "range_4", content: "$100,000 - $500,000" },
    { id: "range_5", content: "$500,000 - $2,500,000" },
    { id: "range_6", content: "$2,500,000 - $10,000,000" },
    { id: "range_7", content: "Over $10,000,000" },
  ];

  async function onSubmit(values: LoginUser) {
    console.log(values);
    try {
      console.log("submitted form", values);
    } catch (e) {}
  }

  return (
    <Form {...form}>
      <div className="relative z-20 mx-auto flex w-full items-center justify-center px-4 py-4 sm:px-6 lg:flex-none lg:px-20 lg:py-24 xl:px-24">
        <div className="w-full max-w-2xl">
          <SectionHead title="Apply for Agency Accounts" />

          <div className="py-10">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <WarningMessage />
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormInput
                      label="First Name"
                      id="firstName"
                      type="text"
                      required
                      placeholder="John"
                      fieldProps={field}
                    />
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormInput
                      label="Last Name"
                      id="lastName"
                      type="text"
                      required
                      placeholder="Doe"
                      fieldProps={field}
                    />
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormInput
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="johndoe@mail.com"
                    required
                    fieldProps={field}
                  />
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormInput
                    label="Phone or WhatsApp Number"
                    id="phone"
                    required
                    type="tel"
                    placeholder="Enter Phone number"
                    fieldProps={field}
                  />
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormInput
                    label="Company Name"
                    id="company"
                    type="text"
                    placeholder="Voxizo media labs"
                    fieldProps={field}
                    required
                  />
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormInput
                    label="Country/Region"
                    id="company"
                    type="text"
                    placeholder="Hong Kong"
                    fieldProps={field}
                    required
                  />
                )}
              />

              <FormField
                control={form.control}
                name="platform"
                render={({ field }) => (
                  <FormItem>
                    <label
                      htmlFor="goals"
                      className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-500"
                    >
                      Platforms
                    </label>
                    <FormControl>
                      <span className="flex flex-wrap gap-3">
                        {radios.map(({ name, key, icon }, idx) => {
                          return (
                            <label
                              htmlFor={key}
                              className="relative block"
                              key={key}
                            >
                              <input
                                id={key}
                                type="radio"
                                defaultChecked={idx === 0}
                                className="peer sr-only"
                                {...field}
                              />
                              <span className="flex w-max cursor-pointer select-none items-center gap-x-3 rounded-lg border-2 border-neutral-800 bg-transparent px-4 py-1.5 text-neutral-400 transition-colors peer-checked:border-neutral-300 peer-checked:text-white">
                                <span className="flex-none [&_svg]:size-5">
                                  {icon}
                                </span>
                                <span>{name}</span>
                              </span>
                            </label>
                          );
                        })}
                      </span>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <label
                      htmlFor="goals"
                      className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-500"
                    >
                      Monthly Advertising Budget
                    </label>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="mt-2" {...field}>
                          <SelectValue placeholder="Budget" />
                        </SelectTrigger>
                        <SelectContent className="shadow-2xl shadow-black/30">
                          {budget.map(({ id, content }) => {
                            return (
                              <SelectItem value={id} key={id}>
                                {content}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="goals"
                render={({ field }) => (
                  <FormItem>
                    <label
                      htmlFor="goals"
                      className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-500"
                    >
                      Goals
                    </label>
                    <FormControl>
                      <div className="mt-2">
                        <textarea
                          rows={5}
                          id="goals"
                          placeholder="Enter your goals..."
                          className="shadow-aceternity block w-full rounded-md border-0 bg-white px-4 py-1.5 text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:bg-neutral-900 dark:text-white sm:text-sm sm:leading-6"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                as={"button"}
                className="w-full disabled:pointer-events-none disabled:opacity-40"
                type="submit"
                disabled
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Form>
  );
}
