import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";

const TopNav = () => {
  return (
    <nav className="text-x; flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <h1>Gallery</h1>

      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default TopNav;
