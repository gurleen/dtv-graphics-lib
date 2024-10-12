import { GraphicManager } from "./src/manager";
import gsap from "gsap";

// handlers
import { DOMHandler } from "./src/handlers/domHandler";
import { SVGHandler } from "./src/handlers/svgHandler";

// animators
import { BasicAnimator } from "./src/anim/BasicAnimator";
import { GsapAnimator } from "./src/anim/GsapAnimator";

(window as any).GraphicManager = GraphicManager;

(window as any).DOMHandler = DOMHandler;
(window as any).SVGHandler = SVGHandler;

(window as any).BasicAnimator = BasicAnimator;
(window as any).GsapAnimator = GsapAnimator;

(window as any).gsap = gsap;
