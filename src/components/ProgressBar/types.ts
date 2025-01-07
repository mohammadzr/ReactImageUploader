export interface ProgressBarProps {
  progress: number; // The current progress value (0 to 100)
  height?: string; // Optional height of the progress bar
  color?: string; // Optional color of the progress bar
}

export interface ProgressBarStyles {
  container: string; // Styles for the progress bar container
  filler: string; // Styles for the filled portion of the progress bar
}