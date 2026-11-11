import { mountDotMatrixTrio, type DotMatrixTrioOptions } from "./DotMatrixTrioEngine.js";
import type { MotionController } from "./motion-runtime";

/** Mount into any DOM node. Call update() for options and destroy() on removal. */
export function mount(target: HTMLElement, options: DotMatrixTrioOptions = {}): MotionController {
  return mountDotMatrixTrio(target, options);
}
export type { DotMatrixTrioOptions };
