import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useFileUpload } from "@/hooks/useFileUpload";
import { ProgressBar } from "@/components/ProgressBar";
import { ImagePreview } from "@/components/ImagePreview";
import { useFormContext } from "react-hook-form";
import { FileUploadProps } from "./types";

export const FileUpload: React.FC<FileUploadProps> = ({
  name,
  onFilesAdded,
}) => {
  const { addFiles, isUploading, files } = useFileUpload({
    onAddFiles: onFilesAdded,
  });
  const { setValue, watch } = useFormContext();
  const formFiles = watch(name) || [];

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      addFiles(acceptedFiles);
      setValue(name, [...formFiles, ...acceptedFiles]);
    },
    [addFiles, setValue, name, formFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".webp"],
    },
    maxSize: 5 * 1024 * 1024,
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? "active" : ""}`}
      >
        <input {...getInputProps()} />
        <p>
          {isDragActive
            ? "Drop the files here..."
            : "Drag 'n' drop some files here, or click to select files"}
        </p>
      </div>
      {isUploading && <ProgressBar />}
      <ImagePreview files={files} />
    </div>
  );
};
