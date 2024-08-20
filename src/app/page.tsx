/* eslint-disable @next/next/no-img-element */

import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const HomePage = async () => {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {images.map((image, index) => (
          <div key={index} className="flex w-48 flex-col gap-1">
            <img src={image.url} alt={image.url} />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
