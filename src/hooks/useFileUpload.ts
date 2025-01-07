import { useState } from "react";
import { validateFile } from "@/utils/fileValidation";

export function useFileUpload({ maxFiles = 24, onAddFiles }) {
  const [isUploading, setIsUploading] = useState(false);
  const [files, setFiles] = useState([]);

  const addFiles = async (newFiles) => {
    const validFiles = newFiles.filter((file) => !validateFile(file));

    if (onAddFiles) {
      setIsUploading(true);
      try {
        await onAddFiles(validFiles);
        setFiles((prevFiles) => [...prevFiles, ...validFiles]);
      } finally {
        setIsUploading(false);
      }
    }
  };

  return {
    isUploading,
    addFiles,
    files,
  };
}