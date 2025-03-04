import React from "react";
import { FormItem, FormControl, FormMessage } from "@/components/ui/form";

export default function FormInput({
  id = "input-field",
  label = "Label",
  type = "text",
  placeholder = "Enter text",
  required = false,
  className = "",
  description = null,
  // @ts-ignore
  fieldProps,
}) {
  return (
    <FormItem>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-500"
      >
        {label}
      </label>
      <FormControl>
        <div className="mt-2">
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            required={required}
            className={`shadow-aceternity block w-full rounded-md border-0 bg-neutral-900 px-4 py-1.5 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 sm:text-sm sm:leading-6 ${className}`}
            {...fieldProps}
          />
        </div>
      </FormControl>
      <FormMessage className="text-red-400" />
    </FormItem>
  );
}
