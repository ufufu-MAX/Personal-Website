import { mountGradientCoverWall, type GradientCoverWallOptions } from "./GradientCoverWallEngine.js";
import type { MotionController } from "./motion-runtime";

/** Mount into any DOM node. Call update() for options and destroy() on removal. */
export function mount(target: HTMLElement, options: GradientCoverWallOptions = {}): MotionController {
  return mountGradientCoverWall(target, options);
}
export type { GradientCoverWallOptions };
