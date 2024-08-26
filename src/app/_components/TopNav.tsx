import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "~/components/simple-upload-button";

const TopNav = () => {
  return (
    <nav className="text-x; flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <h1>Gallery</h1>

      <div className="flex flex-row items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default TopNav;
