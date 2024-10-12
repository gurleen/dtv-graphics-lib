interface Window {
  update: (data: string) => void;
  play: () => void;
  stop: () => void;
  next: () => void;
  blank: () => void;
}

declare var window: Window;
