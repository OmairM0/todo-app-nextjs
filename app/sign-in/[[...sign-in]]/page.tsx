import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <SignIn appearance={{ elements: { rootBox: "m-auto" } }} />;
}
