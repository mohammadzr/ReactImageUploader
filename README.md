# React Image Uploader

A flexible and customizable image upload package for React applications, designed to integrate seamlessly with various form libraries like React Hook Form, Formik, or even without any specific library. This package utilizes Tailwind CSS for styling, providing a consistent and modern user interface.

---

## Features

- Drag-and-drop file upload functionality
- Image preview display
- Progress bar for upload status
- Image compression support
- Image cropping capability
- TypeScript support for type safety
- Easy integration with various form libraries (React Hook Form, Formik, or none)
- Customizable UI components
- Animated transitions using Framer Motion
- Accessibility improvements

---

## Installation

To install the package, run the following command:

```bash
npm install react-image-uploader
```

or

```bash
yarn add react-image-uploader
```

---

## Usage

### FileUpload Component

The `FileUpload` component handles file uploads and integrates with various form libraries.

```tsx
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { FileUpload } from "react-image-uploader";

const MyForm = () => {
  const { control } = useForm();

  return (
    <form>
      <Controller
        name="images"
        control={control}
        render={({ field }) => (
          <FileUpload
            name="images"
            control={control}
            formLibrary="react-hook-form"
            maxFiles={5}
            maxSize={5 * 1024 * 1024}
            accept={{ "image/*": [".jpeg", ".jpg", ".png", ".webp"] }}
            showPreview={true}
            showProgress={true}
            allowCompression={true}
            allowCropping={true}
            onFilesAdded={async (files) => {
              // Handle files added
            }}
            onFileRemove={(file) => {
              // Handle file removal
            }}
            onError={(error) => {
              // Handle error
            }}
          />
        )}
      />
      {/* Other form fields */}
    </form>
  );
};

export default MyForm;
```

---

### ProgressBar Component

The `ProgressBar` component visually indicates the upload progress.

```tsx
import React from "react";
import { ProgressBar } from "react-image-uploader";

const MyProgress = ({ progress }) => {
  return (
    <ProgressBar
      progress={progress}
      height="4px"
      color="bg-green-500"
      backgroundColor="bg-gray-300"
      showLabel={true}
      labelPosition="outside"
    />
  );
};

export default MyProgress;
```

---

### ImagePreview Component

The `ImagePreview` component displays a preview of the uploaded images.

```tsx
import React from "react";
import { ImagePreview } from "react-image-uploader";

const MyPreview = ({ files }) => {
  return (
    <ImagePreview
      files={files}
      onRemove={(file) => {
        /* Handle file removal */
      }}
    />
  );
};

export default MyPreview;
```

---

---

### ImageCropper Component

The `ImageCropper` component allows users to crop images before uploading.

```tsx
import React from "react";
import { ImageCropper } from "react-image-uploader";

const MyCropper = ({ file, onComplete, onCancel }) => {
  return (
    <ImageCropper file={file} onComplete={onComplete} onCancel={onCancel} />
  );
};

export default MyCropper;
```

---

## API Reference

### FileUpload Props

- `name`: The name of the field in the form.
- `control`: The control object from the form library.
- `formLibrary`: The form library being used (`react-hook-form`, `formik`, or `none`).
- `maxFiles`: Maximum number of files allowed.
- `maxSize`: Maximum file size allowed.
- `accept`: Accepted file types.
- `disabled`: Disable the file upload.
- `className`: Custom class name for the component.
- `dropzoneClassName`: Custom class name for the dropzone.
- `previewClassName`: Custom class name for the preview.
- `onFilesAdded`: Callback when files are added.
- `onFileRemove`: Callback when a file is removed.
- `onError`: Callback when an error occurs.
- `showPreview`: Show image preview.
- `showProgress`: Show upload progress.
- `allowCompression`: Allow image compression.
- `allowCropping`: Allow image cropping.
- `customPreview`: Custom preview component.
- `customDropzone`: Custom dropzone component.

---

### ProgressBar Props

- `progress`: A number representing the current progress (0 to 100).
- `height`: Optional height of the progress bar.
- `color`: Optional color of the progress bar.
- `backgroundColor`: Optional background color of the progress bar.
- `showLabel`: Show progress percentage label.
- `labelPosition`: Position of the label (`inside` or `outside`).

---

### ImagePreview Props

- `files`: An array of file objects to display.
- `onRemove`: Callback when a file is removed.
- `onCrop`: Callback when a file is cropped.
- `className`: Custom class name for the preview.
- `CustomPreview`: Custom preview component.

---

### ImageCropper Props

- `file`: The file to be cropped.
- `onComplete`: Callback when cropping is complete.
- `onCancel`: Callback when cropping is canceled.

---

## License

This package is licensed under the MIT License. See the LICENSE file for more information.

---

## .gitignore

Here is a `.gitignore` file to handle git committing and pushing codes:

```plaintext
# Node modules
node_modules/

# Build output
dist/
build/

# Logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Dependency directories
jspm_packages/

# TypeScript
*.tsbuildinfo

# Optional npm cache directory
.npm/

# Optional eslint cache
.eslintcache

# Optional stylelint cache
.stylelintcache

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env
.env.test
.env.production

# Parcel cache
.cache/

# Next.js build output
.next/

# Nuxt.js build output
.nuxt/

# Gatsby files
.cache/
public/

# Vuepress build output
.vuepress/dist/

# Serverless directories
.serverless/

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

# TernJS port file
.tern-port

# VS Code
.vscode/

# JetBrains IDEs
.idea/

# macOS
.DS_Store

# Windows
Thumbs.db
```

---
