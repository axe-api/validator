import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import json from "@rollup/plugin-json";
import { babel } from "@rollup/plugin-babel";
import autoExternal from "rollup-plugin-auto-external";
import filesize from "rollup-plugin-filesize";
import copy from "rollup-plugin-copy";
import path from "path";

const outputFileName = "bundle";
const name = "bundle";
const namedInput = "./index.ts";
const defaultInput = "./src/validator.ts";

const buildConfig = ({
  es5,
  browser = true,
  minifiedVersion = true,
  ...config
}) => {
  const { file } = config.output;
  const ext = path.extname(file);
  const basename = path.basename(file, ext);
  const extArr = ext.split(".");
  extArr.shift();

  const build = ({ minified }) => ({
    input: namedInput,
    ...config,
    output: {
      ...config.output,
      file: `${path.dirname(file)}/${basename}.${(minified
        ? ["min", ...extArr]
        : extArr
      ).join(".")}`,
    },
    plugins: [
      typescript(),
      json(),
      copy({
        targets: [{ src: "src/i18n/*", dest: "dist/i18n" }],
      }),
      resolve({ browser }),
      commonjs(),
      terser(),
      filesize(),
      ...(es5
        ? [
            babel({
              babelHelpers: "bundled",
              presets: ["@babel/preset-env"],
            }),
          ]
        : []),
      ...(config.plugins || []),
    ],
  });

  const configs = [build({ minified: false })];

  if (minifiedVersion) {
    configs.push(build({ minified: true }));
  }

  return configs;
};

export default async () => {
  const result = [
    ...buildConfig({
      input: namedInput,
      output: {
        file: `dist/index.js`,
        format: "esm",
        exports: "named",
      },
    }),

    // browser ESM bundle for CDN
    ...buildConfig({
      input: namedInput,
      output: {
        file: `dist/esm/${outputFileName}.js`,
        format: "esm",
        exports: "named",
      },
    }),

    // Browser UMD bundle for CDN
    ...buildConfig({
      input: defaultInput,
      es5: true,
      output: {
        file: `dist/${outputFileName}.js`,
        name,
        format: "umd",
        exports: "default",
      },
    }),

    // Browser CJS bundle
    ...buildConfig({
      input: defaultInput,
      es5: false,
      minifiedVersion: false,
      output: {
        file: `dist/browser/${name}.cjs`,
        name,
        format: "cjs",
        exports: "default",
      },
    }),

    // Node.js commonjs bundle
    {
      input: defaultInput,
      output: {
        file: `dist/node/${name}.cjs`,
        format: "cjs",
        exports: "default",
      },
      plugins: [typescript(), autoExternal(), resolve(), commonjs()],
    },
  ];

  return result;
};
