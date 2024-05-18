import React from "react";
import Image from "next/image";

// Define type for individual image data
type ImageData = {
  id: number;
  src: string;
  alt: string;
};

interface ImageCardProps {
  image: ImageData;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <div className="bg-transparent p-4 flex flex-col justify-center transform hover:rotate-3 transition-transform duration-500 ease-in-out rounded-lg">
      <div className=" flex justify-center items-center">
        <Image
          className="rounded-lg"
          src={image.src}
          alt={image.alt}
          width="250"
          height="250"
          sizes="100vw"
          // objectFit="cover"
        />
      </div>
    </div>
  );
};

export default ImageCard;
