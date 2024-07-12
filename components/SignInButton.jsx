import { signIn } from "@/auth";
import googleIcon from "@/public/google.svg";
import Image from 'next/image';

export function SignInButton() {
  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button
            className="border border-neutral-500 p-2 px-4 rounded-lg hover:border-neutral-300 text-neutral-500 hover:text-neutral-300 transition-all ease-in-out"
            type="submit"
          >
            <Image
            priority
            src={googleIcon}
            alt="Google Icon"
            className="justify-self-center"
            height={40}
        />
          </button>
        </form>

        {/* <p class="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a
            href="#"
            class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Start a 14 day free trial
          </a>
        </p> */}
      </div>
    </div>
  );
}
