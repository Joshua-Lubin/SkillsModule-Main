import { ExampleType } from "./libs/SkillsModule-Types/example-type";

export const exampleFunction = (message: string): ExampleType => ({
  id: "random id",
  message,
});
