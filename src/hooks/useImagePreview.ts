import { useEffect, useState } from "react";

export const useImagePreview = (files) => {
  const [previews, setPreviews] = useState([]);

  useEffect(() => {
    const newPreviews = [];

    const generatePreview = (file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.readAsDataURL(file);
      });
    };

    const loadPreviews = async () => {
      for (const file of files) {
        const preview = await generatePreview(file);
        newPreviews.push({ file, preview });
      }
      setPreviews(newPreviews);
    };

    if (files.length) {
      loadPreviews();
    } else {
      setPreviews([]);
    }
  }, [files]);

  return previews;
};