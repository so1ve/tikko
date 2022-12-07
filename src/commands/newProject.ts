import { defineCommandWithHandler } from "clerc";
import { prompt } from "@clerc/toolkit";

import { newProject } from "../lib";

export const newProjectCommand = defineCommandWithHandler({
  name: "new",
  description: "Create a new project, clones template from github.",
  parameters: [
    "[projectPath]",
  ],
  flags: {
    template: {
      type: String,
      default: "",
      description: "Template URL",
    },
  },
  handler: async (ctx) => {
    let projectPath = ctx.parameters.projectPath || "";
    let template = ctx.flags.template || "";
    if (!projectPath) {
      const response = await prompt({
        type: "text",
        name: "projectPath",
        message: "Enter Project Path",
      });
      projectPath = response.projectPath;
    }
    if (!template) {
      const response = await prompt({
        type: "text",
        name: "template",
        message: "Enter Template URL",
      });
      template = response.template;
    }
    await newProject(template, projectPath);
  },
});
