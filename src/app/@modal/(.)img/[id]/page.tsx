import { Modal } from "./modal";
import FullImageView from "~/components/full-image";

const PhotoModal = async ({
  params: { id: photoId },
}: {
  params: { id: string };
}) => {
  const numPhotoId = Number(photoId);

  if (Number.isNaN(numPhotoId)) throw new Error("Invalid photo id");

  return (
    <Modal>
      <FullImageView photoId={numPhotoId} />
    </Modal>
  );
};

export default PhotoModal;
