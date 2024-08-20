/* eslint-disable @next/next/no-img-element */
import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

const FullImageView = async (props: { photoId: number }) => {
  const image = await getImage(props.photoId);
  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex flex-shrink items-center">
        <img
          src={image.url}
          className="flex-shrink object-contain"
          alt={image.name}
        />
      </div>

      <div className="flex w-48 flex-shrink-0 flex-col border-l">
        <p className="border-b p-2 text-center text-xl">{image.name}</p>
        <p className="flex flex-col p-2">
          <span>Uploaded By:</span>
          <span>{uploaderInfo.fullName}</span>
        </p>
        <p className="flex flex-col p-2">
          <span>Created On:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </p>
      </div>
    </div>
  );
};

export default FullImageView;
