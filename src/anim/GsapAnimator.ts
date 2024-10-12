import { IAnimator } from "./IAnimator";
import gsap from "gsap";

export class GsapAnimator implements IAnimator {
  timeline: gsap.core.Timeline;

  get isPlaying(): boolean {
    return (
      this.timeline.totalProgress() > 0 || this.timeline.totalProgress() == 1
    );
  }

  constructor(timeline: gsap.core.Timeline) {
    this.timeline = timeline;
  }

  play(): void {
    if (!this.isPlaying) {
      this.timeline.play(0);
    }
  }

  next(): void {
    if (this.isPlaying) {
      this.timeline.play();
    }
  }

  stop(): void {
    this.next();
  }

  blank(): void {
    this.timeline.pause(0);
  }
}
