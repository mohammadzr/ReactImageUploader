import React, { useState, useCallback } from "react";
import ReactCrop, { Crop } from "react-image-crop";
import { Dialog } from "@headlessui/react";
import { generatePreviewUrl } from "@/utils/imageProcessing";
import "react-image-crop/dist/ReactCrop.css";

interface ImageCropperProps {
  file: File;
  onComplete: (croppedFile: File) => void;
  onCancel: () => void;
}

export const ImageCropper: React.FC<ImageCropperProps> = ({
  file,
  onComplete,
  onCancel,
}) => {
  const [crop, setCrop] = useState<Crop>({ aspect: 1 });
  const [completedCrop, setCompletedCrop] = useState<Crop | null>(null);
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);

  const onImageLoaded = useCallback((img: HTMLImageElement) => {
    setImageRef(img);
  }, []);

  const onCropComplete = useCallback((crop: Crop) => {
    setCompletedCrop(crop);
  }, []);

  const getCroppedImg = useCallback(async () => {
    if (!imageRef || !completedCrop) return;

    const canvas = document.createElement("canvas");
    const scaleX = imageRef.naturalWidth / imageRef.width;
    const scaleY = imageRef.naturalHeight / imageRef.height;
    canvas.width = completedCrop.width!;
    canvas.height = completedCrop.height!;
    const ctx = canvas.getContext("2d");

    ctx?.drawImage(
      imageRef,
      completedCrop.x * scaleX,
      completedCrop.y * scaleY,
      completedCrop.width * scaleX,
      completedCrop.height * scaleY,
      0,
      0,
      completedCrop.width!,
      completedCrop.height!
    );

    return new Promise<File>((resolve) => {
      canvas.toBlob((blob) => {
        if (blob) {
          const croppedFile = new File([blob], file.name, {
            type: file.type,
          });
          resolve(croppedFile);
        }
      }, file.type);
    });
  }, [imageRef, completedCrop, file]);

  const handleComplete = async () => {
    const croppedFile = await getCroppedImg();
    if (croppedFile) {
      onComplete(croppedFile);
    }
  };

  return (
    <Dialog open={true} onClose={onCancel}>
      <Dialog.Panel>
        <ReactCrop
          src={URL.createObjectURL(file)}
          crop={crop}
          onImageLoaded={onImageLoaded}
          onChange={(newCrop) => setCrop(newCrop)}
          onComplete={onCropComplete}
        />
        <button onClick={handleComplete}>Crop</button>
        <button onClick={onCancel}>Cancel</button>
      </Dialog.Panel>
    </Dialog>
  );
};
