interface ConfettiConfig {
  angle?: number;
  colors?: string[];
  delay?: number;
  dragFriction?: number;
  duration?: number;
  elementCount?: number;
  height?: string;
  random?: () => number;
  spread?: number;
  startVelocity?: number;
  width?: string;
}

export function confetti(root: HTMLElement, config?: ConfettiConfig): void;
