import { defineCommand } from "clerc";

import { checkUpdates } from "../lib";

export const checkUpdatesCommand = defineCommand({
  name: "check-updates",
  description: "Check updates.",
  flags: {
    install: {
      type: Boolean,
      default: false,
      description: "Install updates",
    },
  },
  handler: async(ctx) => {
    await checkUpdates({
      install: ctx.flags.install,
    });
  },
});
