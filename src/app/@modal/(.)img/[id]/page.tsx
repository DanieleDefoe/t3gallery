import Image from "next/image";
import { getImage } from "~/server/queries";

const PhotoModal = async ({
  params: { id: photoId },
}: {
  params: { id: string };
}) => {
  const numPhotoId = Number(photoId);

  if (Number.isNaN(numPhotoId)) throw new Error("Invalid photo id");

  const image = await getImage(numPhotoId);

  return (
    <div>
      <Image src={image.url} width={384} alt={image.name} height={384} />
    </div>
  );
};

export default PhotoModal;
