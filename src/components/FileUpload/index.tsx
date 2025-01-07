import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { motion, AnimatePresence } from "framer-motion";
import { useFileUpload } from "@/hooks/useFileUpload";
import { ProgressBar } from "@/components/ProgressBar";
import { ImagePreview } from "@/components/ImagePreview";
import { ImageCropper } from "@/components/ImageCropper";
import { validateFile } from "@/utils/fileValidation";
import { compressImage } from "@/utils/imageProcessing";
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "@/constants";
import type { FileUploadProps } from "./types";

export const FileUpload: React.FC<FileUploadProps> = ({
  name,
  control,
  formLibrary = "none",
  maxFiles = 10,
  maxSize = MAX_FILE_SIZE,
  accept = { "image/*": ACCEPTED_IMAGE_TYPES },
  disabled = false,
  className = "",
  dropzoneClassName = "",
  previewClassName = "",
  onFilesAdded,
  onFileRemove,
  onError,
  showPreview = true,
  showProgress = true,
  allowCompression = true,
  allowCropping = false,
  customPreview,
  customDropzone,
}) => {
  const [cropperFile, setCropperFile] = useState<File | null>(null);
  const { addFiles, isUploading, files, progress } = useFileUpload({
    maxFiles,
    onAddFiles: onFilesAdded,
  });

  const handleDrop = useCallback(
    async (acceptedFiles: File[]) => {
      try {
        let processedFiles = acceptedFiles;

        // Validate files
        const validationErrors = acceptedFiles
          .map((file) => validateFile(file))
          .filter(Boolean);

        if (validationErrors.length) {
          onError?.(validationErrors.join("\n"));
          return;
        }

        // Process files if needed
        if (allowCompression) {
          processedFiles = await Promise.all(
            acceptedFiles.map((file) => compressImage(file))
          );
        }

        // Handle form library integration
        if (formLibrary === "react-hook-form" && control) {
          control.setValue(name, processedFiles);
        } else if (formLibrary === "formik" && control) {
          control.setFieldValue(name, processedFiles);
        }

        await addFiles(processedFiles);
      } catch (error) {
        onError?.(error.message);
      }
    },
    [addFiles, allowCompression, control, formLibrary, name, onError]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept,
    maxSize,
    disabled,
    multiple: maxFiles > 1,
  });

  const renderDropzone = () => {
    if (customDropzone) {
      return <customDropzone {...getRootProps()} />;
    }

    return (
      <motion.div
        {...getRootProps()}
        className={`relative rounded-lg border-2 border-dashed p-6 text-center hover:border-blue-400 transition-colors ${
          isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
        } ${dropzoneClassName}`}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <input {...getInputProps()} />
        <div className="space-y-2">
          <div className="text-gray-600">
            {isDragActive ? (
              "Drop files here..."
            ) : (
              <>
                Drag & drop files here, or{" "}
                <span className="text-blue-500">browse</span>
              </>
            )}
          </div>
          <div className="text-sm text-gray-500">
            Supports: {Object.values(accept).flat().join(", ")}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {renderDropzone()}

      {showProgress && isUploading && <ProgressBar progress={progress} />}

      {showPreview && files.length > 0 && (
        <AnimatePresence>
          <ImagePreview
            files={files}
            onRemove={onFileRemove}
            onCrop={allowCropping ? setCropperFile : undefined}
            className={previewClassName}
            CustomPreview={customPreview}
          />
        </AnimatePresence>
      )}

      {allowCropping && cropperFile && (
        <ImageCropper
          file={cropperFile}
          onComplete={(croppedFile) => {
            setCropperFile(null);
            handleDrop([croppedFile]);
          }}
          onCancel={() => setCropperFile(null)}
        />
      )}
    </div>
  );
};
