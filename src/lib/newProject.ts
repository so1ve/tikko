import { parseNi, run } from "@antfu/ni";
import type { DownloadTemplateOptions } from "giget";
import { downloadTemplate } from "giget";
import { CheckPackages } from "taze";

const DOWNLOAD_OPTIONS: DownloadTemplateOptions = {
  registry: "https://raw.githubusercontent.com/so1ve/tikko/main/templates",
};

export const newProject = async (template: string, projectPath: string) => {
  const { dir } = await downloadTemplate(template, {
    ...DOWNLOAD_OPTIONS,
    dir: projectPath,
  });
  process.chdir(dir);
  await CheckPackages({
    install: true,
    force: true,
    mode: "major",
    write: true,
    all: true,
    cwd: dir,
    loglevel: "error",
  });
  await run(parseNi, []);
};
