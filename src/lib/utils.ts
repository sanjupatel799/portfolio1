export function cn(...inputs: string[]) {
  return inputs.filter(Boolean).join(" ");
}

export function getScrollAnimation(
  type: "fade" | "left" | "right" | "scale" = "fade"
) {
  switch (type) {
    case "left":
      return "reveal-left";
    case "right":
      return "reveal-right";
    case "scale":
      return "reveal-scale";
    default:
      return "reveal";
  }
}

export function staggerDelay(index: number, base = 0.05) {
  return `${index * base}s`;
}
