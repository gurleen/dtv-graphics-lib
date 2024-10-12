import type { IHandler } from "./IHandler";
import { TemplateVariable, TemplateVariableType } from "../util/kv";

export class SVGHandler implements IHandler {
  root: SVGSVGElement;
  verbose: boolean;

  constructor(root: SVGSVGElement, verbose: boolean = false) {
    this.root = root;
    this.verbose = verbose;
  }

  logUpdate(variable: TemplateVariable): void {
    if (this.verbose) {
      console.log(
        `Updating ${variable.key} (${variable.type}) to ${variable.value}`,
      );
    }
  }

  handle(variable: TemplateVariable): void {
    this.logUpdate(variable);
    switch (variable.type) {
      case TemplateVariableType.Text:
        this.handleText(variable);
        break;
    }
  }

  handleText(variable: TemplateVariable): void {
    let element = this.root.getElementById(variable.key) as SVGTextElement;
    if (element) {
      let tspanElement = element.querySelector("tspan");
      if (tspanElement) {
        tspanElement.textContent = variable.value;
      } else {
        element.textContent = variable.value;
      }
    }
  }

  handleColor(variable: TemplateVariable): void {
    let element = this.root.getElementById(variable.key);
    if (element) {
      element.setAttribute("fill", variable.value);
    }
  }

  handleImage(variable: TemplateVariable): void {
    let element = this.root.getElementById(variable.key);
    if (element) {
      element.setAttribute("xlink:href", variable.value);
    }
  }
}
