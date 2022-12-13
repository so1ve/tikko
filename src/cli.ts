import { Clerc, completionsPlugin, helpPlugin, notFoundPlugin } from "clerc";

import packageJSON from "../package.json";

import { checkUpdatesCommand, newProjectCommand } from "./commands";

async function main() {
  const { name, description, version } = packageJSON;

  Clerc.create()
    .name(name)
    .description(description)
    .version(version)
    .use(helpPlugin())
    // @ts-expect-error ignore
    .use(completionsPlugin())
    .use(notFoundPlugin())
    .command(newProjectCommand)
    .command(checkUpdatesCommand)
    .parse();
}

main();
