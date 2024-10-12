import { IAnimator } from "./IAnimator";
import gsap from "gsap";

export class BasicAnimator implements IAnimator {
  element: HTMLElement;
  timeline: gsap.core.Timeline;

  get isPlaying(): boolean {
    return this.timeline.totalProgress() > 0;
  }

  constructor(element: HTMLElement) {
    console.log("Creating BasicAnimator");
    this.element = element;
    this.timeline = gsap.timeline({ paused: true });
    this.initAnimation();
  }

  initAnimation() {
    console.log("Initializing animation");
    this.timeline.from(this.element, { opacity: 0, x: -50, duration: 1 });
    this.timeline.addPause();
    this.timeline.to(this.element, { opacity: 0, x: 50, duration: 1 });
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
