export enum TemplateVariableType {
  Text = "text",
  Color = "color",
  Image = "img",
}

export interface ITemplateVariable {
  key: string;
  type: TemplateVariableType;
  value: string;
}

export class TemplateVariable implements ITemplateVariable {
  key: string;
  type: TemplateVariableType;
  value: string;

  constructor(key: string, type: TemplateVariableType, value: string) {
    this.key = key;
    this.type = type;
    this.value = value;
  }

  static fromJSON(rawKey: string, value: string): TemplateVariable {
    // rawKey = "[type]:[key]"
    if (rawKey.includes(":")) {
      let [rawType, key] = rawKey.split(":");
      let type = rawType as TemplateVariableType;
      return new TemplateVariable(key, type, value);
    }

    return new TemplateVariable(rawKey, TemplateVariableType.Text, value);
  }
}
