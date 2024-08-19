/* eslint-disable @next/next/no-img-element */

import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/547403b5-e1c3-48da-9d0e-9e1eea52cca6-lkxw50.jpg",
  "https://utfs.io/f/3018ebd2-54ea-4342-b5fa-26c284757932-yg7hh.jpeg",
  "https://utfs.io/f/4a1486e6-df3f-430b-ae3b-c40deb7aeb0a-cdrbzy.png",
  "https://utfs.io/f/992a0a27-8c02-4dbf-a60c-bea9099b0485-uqe41n.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

const HomePage = async () => {
  const posts = await db.query.posts.findMany();

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={index} className="w-48">
            <img src={image.url} alt={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
