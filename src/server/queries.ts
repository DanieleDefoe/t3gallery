import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { images } from "./db/schema";
import { and, eq } from "drizzle-orm";
import analyticsServerClient from "./analytics";

export const getMyImages = async () => {
  const user = auth();

  if (!user?.userId) throw new Error("Unauthorized");

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });
  return images;
};

export const getImage = async (id: number) => {
  const user = auth();

  if (!user?.userId) throw new Error("Unauthorized");

  const image = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  return image;
};

export const deleteImage = async (id: number) => {
  const user = auth();

  if (!user?.userId) throw new Error("Unauthorized");

  analyticsServerClient.capture({
    distinctId: user.userId,
    event: "delete image",
    properties: {
      imageId: id,
    },
  });

  await db
    .delete(images)
    .where(and(eq(images.id, id), eq(images.userId, user.userId)));
};
