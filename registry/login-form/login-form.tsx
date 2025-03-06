"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Form } from "@/components/ui/form";
import { BaseFormField } from "../base-form-field";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "* Email is required",
    })
    .email({
      message: "* Invalid email address",
    }),
  password: z.string().min(1, {
    message: "* Password is required",
  }),
});



export function LoginForm() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // const { mutate: login } = trpc.auth.login.useMutation({
  //   onSuccess: (user) => {
  //     setUser(user);
  //     document.cookie = `token=${user.Session.token}; path=/`;
  //     form.reset();
  //     toast.success(`Welcome back, ${user.username}!`);
  //     if (!user.verified) router.push("/signup");
  //     else router.push("/");
  //   },
  //   onError: (error) => {
  //     form.setValue("password", "");
  //     form.setFocus("password");
  //     toast.error(error.shape?.message || "Something went wrong.");
  //   },
  // });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log("Values: ", values);
  }

  return (
    <Card className='mx-auto w-full max-w-sm'>
      <CardHeader>
        <CardTitle className='text-2xl'>Login</CardTitle>
        <CardDescription>
          Enter your email and password below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <BaseFormField
              control={form.control}
              name='email'
              label='Email'
              placeholder='read-mate@niklas.sh'
            />
            <div>
              <BaseFormField
                control={form.control}
                name='password'
                label='Password'
                placeholder='********'
                type='password'
              />
              <Button
                type='reset'
                variant={"link"}
                className='w-full justify-end space-x-2 px-0 text-muted-foreground'
              >
                <Link href={"/forget-password"}>Forgot your password?</Link>
              </Button>
            </div>
            <Button type='submit' className='w-full'>
              Login
            </Button>
          </form>
        </Form>
        <Link className='pt-2 text-muted-foreground' href='/signup'>
          No account? <b className='underline'>Sign Up</b>
        </Link>
      </CardContent>
    </Card>
  );
}
