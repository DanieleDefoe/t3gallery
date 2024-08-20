import FullImageView from "~/components/full-image";

const PhotoPage = ({ params: { id: photoId } }: { params: { id: string } }) => {
  const numPhotoId = Number(photoId);

  if (Number.isNaN(numPhotoId)) throw new Error("Invalid photo id");

  return <FullImageView photoId={Number(photoId)} />;
};

export default PhotoPage;
