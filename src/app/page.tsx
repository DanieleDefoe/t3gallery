/* eslint-disable @next/next/no-img-element */

import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

const Images = async () => {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image, index) => (
        <div key={index} className="flex w-48 flex-col gap-1">
          <img src={image.url} alt={image.url} />
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
};

const HomePage = async () => {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
};

export default HomePage;
