export function generatePreviewUrl(file: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result as string);
    };
    reader.readAsDataURL(file);
  });
}

export function manipulateImageData(imageData: ImageData, manipulation: (data: ImageData) => ImageData): ImageData {
  return manipulation(imageData);
}