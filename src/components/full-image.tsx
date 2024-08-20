/* eslint-disable @next/next/no-img-element */
import { getImage } from "~/server/queries";

const FullImageView = async (props: { photoId: number }) => {
  const image = await getImage(props.photoId);

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
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
};

export default FullImageView;
