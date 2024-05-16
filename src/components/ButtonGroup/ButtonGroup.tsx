import React from "react";
import GoToHomeButton from "../GoToHome/GoToHome";
import GoToGalleryButton from "../GoToGallery/GoToGallery";
import GoToTopButton from "../GoToTopButton/TopButton";

const ButtonGroup = () => {
  return (
    <div>
      <GoToHomeButton />
      <GoToGalleryButton />
      <GoToTopButton />
    </div>
  );
};

export default ButtonGroup;
