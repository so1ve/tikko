import { Clerc } from "clerc";
import { helpPlugin } from "@clerc/plugin-help";
import { completionsPlugin } from "@clerc/plugin-completions";
import { notFoundPlugin } from "@clerc/plugin-not-found";

import packageJSON from "../package.json";

import { newProjectCommand } from "./commands";

async function main () {
  const { name, description, version } = packageJSON;

  Clerc.create()
    .name(name)
    .description(description)
    .version(version)
    .use(helpPlugin())
    .use(completionsPlugin())
    .use(notFoundPlugin())
    .command(newProjectCommand)
    .parse();
}

main();
