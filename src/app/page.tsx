import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

const Images = async () => {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image, index) => (
        <div key={index} className="flex h-48 w-48 flex-col gap-1">
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              alt={image.url}
              width={192}
              height={192}
              style={{ objectFit: "contain" }}
            />
          </Link>
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
