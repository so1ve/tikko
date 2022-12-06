import { Clerc } from "clerc";
import { helpPlugin } from "@clerc/plugin-help";
import { completionsPlugin } from "@clerc/plugin-completions";
import { notFoundPlugin } from "@clerc/plugin-not-found";

import packageJSON from "../package.json";

import newCommand from "./commands/new";

async function main () {
  const { name, description, version } = packageJSON;

  Clerc.create()
    .name(name)
    .description(description)
    .version(version)
    .use(helpPlugin())
    .use(completionsPlugin())
    .use(notFoundPlugin())
    .command(newCommand)
    .parse();
}

main();
