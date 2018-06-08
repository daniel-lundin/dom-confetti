interface ConfettiConfig {
    angle?: number;
    spread?: number;
    startVelocity?: number;
    elementCount?: number;
    decay?: number;
    colors?: string[];
    random?: () => number;
}

export function confetti(root: Element, config?: ConfettiConfig): void;
