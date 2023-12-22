import typescript from "rollup-plugin-typescript2";
import filesize from "rollup-plugin-filesize";
import terser from "@rollup/plugin-terser";
import copy from "rollup-plugin-copy";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/cjs/bundle.cjs.js",
      format: "cjs",
    },
    {
      file: "dist/esm/bundle.esm.js",
      format: "esm",
    },
  ],
  plugins: [
    copy({
      targets: [{ src: "src/i18n/*", dest: "dist/i18n" }],
    }),
    typescript(),
    terser(),
    filesize(),
  ],
};
