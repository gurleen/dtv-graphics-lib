import type { TemplateVariable } from "../kv";

export interface IHandler {
  handle(variable: TemplateVariable): void;
}
