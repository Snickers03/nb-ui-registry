import { Control } from "react-hook-form";

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  className?: string;
}

export const BaseFormField = ({
  control,
  name,
  label,
  placeholder,
  type = "text",
  className,
}: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <div className='flex justify-between'>
            <FormLabel>{label}</FormLabel>
            <div className='h-4'>
              <FormMessage />
            </div>
          </div>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
        </FormItem>
      )}
    />
  );
};
