import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();

  return (
    <div className="flex flex-col items-center justify-center h-screen p-6">
      <div className="flex-l flex-col items-center justify-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Welcome to <br />
            <span className="text-blue-700 text-5xl md:text-6xl">HMS</span>
          </h1>
        </div>

        <div className="text-center max-w-xl flex flex-col items-center justify-center">
          <p className="mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            incidunt qui veritatis nemo a assumenda porro officiis!
            Perspiciatis, possimus deleniti beatae iste dolorum harum
            repellendus nemo recusandae alias veritatis animi iusto.
          </p>

          <div>
            {userId ? (
              <>
                <Link href={"/dashboard"}>
                  <Button>View Dashboard</Button>
                </Link>
                <UserButton />
              </>
            ) : (
              <>
                <Link href="/sign-up">
                  <Button>New Patient</Button>
                </Link>
                <Link href="/sign-in">
                  <Button variant="outline" className="underline">
                    Login to Account
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      <footer className="mt-8">
        <p className="text-center text-sm"> &copy; 2025 Hospital</p>
      </footer>
    </div>
  );
}
