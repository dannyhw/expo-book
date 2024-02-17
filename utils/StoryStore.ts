import { storyNameFromExport, toId } from "@storybook/csf";
import { ComponentType } from "react";
//@ts-ignore
const storyReqs = require.context("../components", true, /.*\.stories\.tsx?$/);

export const storyStore: Record<
  string,
  {
    id: string;
    name: string;
    title: string;
    Component: ComponentType;
    args: any;
  }
> = {};

storyReqs.keys().forEach((filename: string) => {
  try {
    // console.log('req', req.resolve(filename));
    // console.log('filename', filename);
    const fileExports = storyReqs(filename);
    if (!fileExports.default) return;
    const meta = fileExports.default;
    Object.keys(fileExports).forEach((key) => {
      if (key === "default") return;

      const exportValue = fileExports[key];
      if (!exportValue) return;

      const name = storyNameFromExport(key);
      const title = meta.title;

      if (title) {
        const id = toId(title, name);

        storyStore[id] = {
          id,
          name,
          title,
          Component: meta.component,
          args: fileExports[key].args,
        };
      } else {
        console.log(
          `Unexpected error while loading ${filename}: could not find title`,
        );
      }
    });
  } catch (error) {
    console.error("error", error);
  }
});
