import React from "react";

interface ImagePreviewProps {
  files: { preview: string; file: File }[];
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({ files }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {files.map((file, index) => (
        <div key={index} className="relative w-32 h-32">
          <img
            src={file.preview}
            alt={file.file.name}
            className="object-cover w-full h-full rounded"
          />
        </div>
      ))}
    </div>
  );
};