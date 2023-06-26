import { ExampleType } from "./libs/SkillsModule-Types/example-type";

export const exampleFunction = (message: string, id: string): ExampleType => ({
  id,
  message,
});
