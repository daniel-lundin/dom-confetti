interface ConfettiConfig {
    angle?: number;
    spread?: number;
    width?: string;
    height?: string;
    perspective?: string;
    duration?: number;
    dragFriction?: number;
    stagger?: number;
    startVelocity?: number;
    elementCount?: number;
    decay?: number;
    colors?: string[];
    image?: string;
    random?: () => number;
}

export function confetti(root: HTMLElement, config?: ConfettiConfig): void;
