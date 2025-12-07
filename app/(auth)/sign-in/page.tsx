'use client';
import FooterLink from "@/components/forms/FooterLink";
import InputField from "@/components/forms/InputField";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

interface SignInFormData {
  email: string;
  password: string;
}

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  })

  const onSubmit = async (data: SignInFormData) => {
    try {
      console.log(data)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <h1 className='form-title'>Welcome Back</h1>
      {/* Form Starts Here */}
      <InputField
        name="email"
        label="Email"
        placeholder="parekh@gmail.com"
        register={register}
        error={errors.email}
        validation={{ required: 'Email is required', pattern: /^\w+@\w+\.\w+$/, message: 'Email address is required' }}
      />
      <InputField
        name="password"
        label="Password"
        placeholder="Enter your password"
        type="password"
        register={register}
        error={errors.password}
        validation={{ required: 'Password is required', minLength: 8 }}
      />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 ">
        <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
          {isSubmitting ? 'Signing In...' : 'Sign In'}
        </Button>
        <FooterLink text="Don't have an account?" linkText="Create an account" href="/sign-up" />
      </form>
    </>
  )
}

export default SignInPage