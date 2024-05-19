import { RiDownload2Line } from "react-icons/ri";
import { useState, useEffect } from "react";

const DownloadButton = () => {
  const [cvUrl, setCvUrl] = useState("");

  useEffect(() => {
    // Assume we fetch the CV URL from an API or determine it dynamically
    const fetchCvUrl = async () => {
      // Simulate an API call or dynamic URL assignment
      const url = "/cv.pdf"; // Replace with dynamic logic
      setCvUrl(url);
    };

    fetchCvUrl();
  }, []);

  return (
    <a
      href={cvUrl}
      download
      className="dwnldBtn flex items-center gap-2 2xl:gap-4"
    >
      <RiDownload2Line className="text-xl" />
      <span>Download CV</span>
    </a>
  );
};

export default DownloadButton;
