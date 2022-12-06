import { defineCommandWithHandler } from "clerc";
import { Toolkit } from "@clerc/toolkit";
import type { DownloadTemplateOptions } from "giget";
import { downloadTemplate } from "giget";

const DOWNLOAD_OPTIONS: DownloadTemplateOptions = {
  registry: "https://raw.githubusercontent.com/so1ve/tikko/main/templates",
};

export default defineCommandWithHandler({
  name: "new",
  description: "Create a new project, clones template from github.",
  parameters: [
    "[templateURL]",
  ],
  handler: async (ctx) => {
    let templateURL = ctx.parameters.templateURL || "";
    if (!templateURL) {
      const response = await Toolkit.prompt({
        type: "text",
        name: "templateURL",
        message: "Enter template URL",
      });
      templateURL = response.templateURL;
    }
    await downloadTemplate(templateURL, DOWNLOAD_OPTIONS);
  },
});
