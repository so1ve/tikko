// Check updates

import { CheckPackages } from "taze";

interface CheckUpdatesOptions {
  install?: boolean
}
export const checkUpdates = async({
  install = true,
}: CheckUpdatesOptions = {}) => {
  const { packages } = await CheckPackages({
    install,
    force: true,
    mode: "major",
    write: true,
    all: true,
    cwd: process.cwd(),
    loglevel: "info",
  });
  // if (packages.length > 0) {
  //   for (const pkg of packages) {
  //     for (const dep of pkg.deps) {
  //       console.log(`${pkg.name}: - ${dep.name} ${dep.currentVersion}`);
  //     }
  //   }
  // }
};
