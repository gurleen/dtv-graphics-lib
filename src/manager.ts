import { Dictionary } from "./util/dict";
import { TemplateVariable } from "./util/kv";
import { IHandler } from "./handlers/IHandler";
import { IAnimator } from "./anim/IAnimator";

export class GraphicManager {
  staticData: Dictionary<TemplateVariable>;
  liveData: Dictionary<TemplateVariable>;
  handler: IHandler;
  animator: IAnimator;

  constructor(handler: IHandler, animator: IAnimator) {
    this.staticData = new Dictionary<TemplateVariable>();
    this.liveData = new Dictionary<TemplateVariable>();
    this.handler = handler;
    this.animator = animator;
    this.setGlobalFunctions();
  }

  setGlobalFunctions() {
    window.update = (data: string) => this.update(data);
    window.play = () => this.animator.play();
    window.stop = () => this.animator.stop();
    window.next = () => this.animator.next();
    window.blank = () => this.animator.blank();
  }

  update(rawJson: string) {
    let data = JSON.parse(rawJson);
    let variables = GraphicManager.parse(data);

    if (variables.length > 0) {
      this.updateStaticData(variables);
      this.dispatchToHandler(variables);
      this.animator.play();
    }
  }

  updateStaticData(vars: Array<TemplateVariable>) {
    Dictionary.clear(this.staticData);
    for (let variable of vars) {
      this.staticData[variable.key] = variable;
    }
  }

  dispatchToHandler(variables: Array<TemplateVariable>) {
    for (let variable of variables) {
      this.handler.handle(variable);
    }
  }

  static parse(rawData: any): Array<TemplateVariable> {
    let variables = Array<TemplateVariable>();
    for (let key in rawData) {
      let value = rawData[key];
      let variable = TemplateVariable.fromJSON(key, value);
      variables.push(variable);
    }
    return variables;
  }
}
