
import googleIcon from "@/public/google.svg";
import { useSession, signIn, signOut } from "next-auth/react";
import { revalidatePath } from "next/cache";
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"

const SignInButton = () =>  {
  const { data: session, status } = useSession();
  // const session = true
  return (
    <div>
        {
          !session?(
            <Dialog className="">
              <DialogTrigger className="font-medium rounded-full text-sm px-4 py-2 bg-neutral-300 hover:bg-neutral-100 text-neutral-900 hover:text-neutral-700 transition-all ease-in-out">
                Sign In
              </DialogTrigger>
              <DialogContent className="flex flex-col text-neutral-300 items-start bg-neutral-950 border-0 p-8">
                
                <h3 className="w-full text-center text-5xl mt-4 mb-6">
                  Sign In
                </h3>
                <button
                  className="flex flex-row items-center justify-center gap-2 text-white border border-neutral-700 bg-neutral-900 py-2 w-full rounded-full hover:bg-neutral-700 transition-all ease-in-out"
                  type="submit"
                  onClick={async () => signIn("google")}
                >
                  <Image
                    priority
                    src={googleIcon}
                    alt="Google Icon"
                    height={30}
                  />
                  Sign In with Google
                </button>
                <div className="w-full flex flex-row items-center gap-2">
                  <div className="h-0 w-full border-b border-neutral-700">
                  </div>
                  <p className="text-neutral-500">
                    Or
                  </p>
                  <div className="h-0 w-full border-b border-neutral-700">
                  </div>
                </div>
                <div className="cursor-not-allowed flex flex-row items-center justify-center gap-2 text-neutral-500 bg-neutral-900 py-2 w-full rounded-full transition-all ease-in-out">
                  New methods coming soon
                </div>
                <div className="w-full mt-6 flex flex-row justify-center">
                  <DialogClose asChild>
                    <button className="px-6 py-2">
                      Close
                    </button>
                  </DialogClose>
                </div>
              </DialogContent>

            </Dialog>
          ):(
            <button onClick={async () => signOut()} className=" flex flex-row gap-2 items-center font-medium rounded-full text-sm px-2 pr-4 py-2 bg-neutral-300 hover:bg-neutral-100 text-neutral-900 hover:text-neutral-700 transition-all ease-in-out">
              <Image
                src={session?.user?.image}
                className="aspect-square rounded-full"
                width={20}
                height={20}
              />
              <p className="">
                Sign Out
              </p>
            </button>
          )
        }
        
        {/* <form
          action={async () => {
            "use server";
            await signIn("google");
            revalidatePath('/')
          }}
        >
          
        </form> */}
    </div>
  );
}

export default SignInButton