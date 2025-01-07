# README.md

# Image Upload Package

A flexible and customizable image upload package for React applications, designed to integrate seamlessly with React Hook Form. This package utilizes ShadCN and Tailwind CSS for styling, providing a consistent and modern user interface.

## Features

- Drag-and-drop file upload functionality
- Image preview display
- Progress bar for upload status
- TypeScript support for type safety
- Easy integration with React Hook Form

## Installation

To install the package, run the following command:

```bash
npm install image-upload-package
```

or

```bash
yarn add image-upload-package
```

## Usage

### FileUpload Component

The `FileUpload` component handles file uploads and integrates with React Hook Form.

```tsx
import { FileUpload } from 'image-upload-package';

const MyForm = () => {
  return (
    <form>
      <FileUpload name="images" control={control} />
      {/* Other form fields */}
    </form>
  );
};
```

### ImagePreview Component

The `ImagePreview` component displays a preview of the uploaded images.

```tsx
import { ImagePreview } from 'image-upload-package';

const MyPreview = ({ files }) => {
  return <ImagePreview files={files} />;
};
```

### ProgressBar Component

The `ProgressBar` component visually indicates the upload progress.

```tsx
import { ProgressBar } from 'image-upload-package';

const MyProgress = ({ progress }) => {
  return <ProgressBar value={progress} />;
};
```

## API Reference

### FileUpload Props

- `name`: The name of the field in the form.
- `control`: The control object from React Hook Form.

### ImagePreview Props

- `files`: An array of file objects to display.

### ProgressBar Props

- `value`: A number representing the current progress (0 to 100).

## License

This package is licensed under the MIT License. See the LICENSE file for more information.