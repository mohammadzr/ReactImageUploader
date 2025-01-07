export interface FileUploadProps {
  // Form-related props
  name: string;
  control?: any;
  formLibrary?: "react-hook-form" | "formik" | "none";

  // Customization props
  maxFiles?: number;
  maxSize?: number;
  accept?: Record<string, string[]>;
  disabled?: boolean;

  // Style props
  className?: string;
  dropzoneClassName?: string;
  previewClassName?: string;

  // Callback props
  onFilesAdded?: (files: File[]) => Promise<void>;
  onFileRemove?: (file: File) => void;
  onError?: (error: string) => void;

  // Feature flags
  showPreview?: boolean;
  showProgress?: boolean;
  allowCompression?: boolean;
  allowCropping?: boolean;

  // Custom components
  customPreview?: React.ComponentType<{ file: File }>;
  customDropzone?: React.ComponentType;
}
