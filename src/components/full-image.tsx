/* eslint-disable @next/next/no-img-element */
import { clerkClient } from "@clerk/nextjs/server";
import { deleteImage, getImage } from "~/server/queries";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";

const FullImageView = async (props: { photoId: number }) => {
  const image = await getImage(props.photoId);

  if (!image) {
    return redirect("/");
  }

  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex w-full flex-shrink items-center">
        <img
          src={image.url}
          className="w-full flex-shrink object-contain"
          alt={image.name}
        />
      </div>

      <div className="flex w-44 flex-shrink-0 flex-col border-l">
        <p className="border-b p-2 text-center text-xl">{image.name}</p>
        <p className="flex flex-col p-2">
          <span>Uploaded By:</span>
          <span>{uploaderInfo.fullName}</span>
        </p>
        <p className="flex flex-col p-2">
          <span>Created On:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </p>

        <div className="p-2">
          <form
            action={async () => {
              "use server";
              await deleteImage(props.photoId);
              redirect("/");
            }}
          >
            <Button variant="destructive" type="submit">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FullImageView;
