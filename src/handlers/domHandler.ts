import type { IHandler } from "./IHandler";
import { TemplateVariable, TemplateVariableType } from "../util/kv";

export class DOMHandler implements IHandler {
  handle(variable: TemplateVariable): void {
    switch (variable.type) {
      case TemplateVariableType.Text:
        this.handleText(variable);
        break;
      case TemplateVariableType.Image:
        this.handleImage(variable);
        break;
    }
  }

  getElem(variable: TemplateVariable): HTMLElement | null {
    return document.getElementById(variable.key);
  }

  handleText(variable: TemplateVariable): void {
    let element = this.getElem(variable);
    if (element) {
      element.innerText = variable.value;
    }
  }

  handleImage(variable: TemplateVariable): void {
    let element = this.getElem(variable);
    if (element) {
      element.setAttribute("src", variable.value);
    }
  }
}
