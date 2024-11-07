"use client";
import Button from "@/components/ui/Button";
import LabeledInput from "@/components/ui/LabeledInput";
import Image from "next/image";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";

type FieldTypes = {
  name: string;
  email: string;
  password: string;
};

export default function Home() {
  const onSubmit = (data: FieldTypes) => {
    console.log(data);
  };
  const methods = useForm<FieldTypes>();
  return (
    <div className="relative overflow-hidden h-screen bg-lightprimary dark:bg-darkprimary">
      <div className="flex h-full justify-center items-center px-4">
        <div data-testid="flowbite-card" className="flex rounded-md bg-white dark:bg-dark relative break-words flex-col card p-6 dark:shadow-dark-md shadow-md md:w-[450px] w-full border-none" style={{ borderRadius: 7 }}>
          <div className="flex h-full flex-col justify-start gap-0 p-0">
            <div className="mx-auto mb-6">
              <h3 className="text-xl font-bold">Porject Management APP</h3>
            </div>
            <div className="flex justify-between gap-8 my-6 ">
              <Link className="px-4 py-2.5 border border-ld flex gap-2 items-enter w-full rounded-md text-center justify-center text-ld text-primary-ld" href="/">
                <Image alt="google" loading="lazy" width={18} height={18} decoding="async" data-nimg={1} src="https://modernize-tailwind-nextjs-main.vercel.app/_next/static/media/google-icon.b28e737a.svg" style={{ color: "transparent" }} /> Google
              </Link>
              <Link className="px-4 py-2.5 border border-ld flex gap-2 items-center w-full rounded-md text-center justify-center text-ld text-primary-ld" href="/">
                <Image alt="google" loading="lazy" width={18} height={18} decoding="async" data-nimg={1} src="https://modernize-tailwind-nextjs-main.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-facebook.30c00baa.png&w=32&q=75" style={{ color: "transparent" }} />
                Facebook
              </Link>
            </div>
            <div className="inline-flex relative w-full items-center justify-center">
              <hr className="my-3 h-px w-full border-0 bg-border dark:bg-darkborder !border-t !border-ld !bg-transparent" data-testid="flowbite-hr-text" role="separator" />
              <span className="absolute left-1/2 -translate-x-1/2 bg-white px-3 text-base font-medium text-dark dark:bg-dark dark:text-white">or sign up with</span>
            </div>
            <FormProvider {...methods}>
              <form className="mt-6" onSubmit={methods.handleSubmit(onSubmit)}>
                <LabeledInput label="Name" placeholder="Enter name" name="name" rules={{ required: "Name is required" }} />
                <LabeledInput label="Email" placeholder="Enter email" name="email" rules={{ required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" } }} />
                <LabeledInput label="Password" placeholder="Enter Password" name="password" type="password" rules={{ required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } }} />
                <Button>Sign Up</Button>
              </form>
            </FormProvider>
            <div className="flex gap-2 text-base text-ld font-medium mt-6 items-center justify-start">
              <p>Already have an Account?</p>
              <a className="text-primary text-sm font-medium" href="/auth/auth2/login">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
