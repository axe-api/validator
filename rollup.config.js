import typescript from "rollup-plugin-typescript2";
import filesize from "rollup-plugin-filesize";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/bundle.cjs.js",
      format: "cjs",
    },
    {
      file: "dist/bundle.esm.js",
      format: "esm",
    },
  ],
  plugins: [typescript(), terser(), filesize()],
};
