const resolve = require("@rollup/plugin-node-resolve");
const typescript = require("@rollup/plugin-typescript");
const commonjs = require("@rollup/plugin-commonjs");
const json = require("@rollup/plugin-json");
const polyFillNode = require("rollup-plugin-polyfill-node");
const define = require("rollup-plugin-define");
const { terser } = require("rollup-plugin-terser");

module.exports = [
  {
    input: "./src/index.ts",
    output: [
      {
        dir: "lib",
        format: "cjs",
        entryFileNames: "[name].cjs.js",
        sourcemap: false, // 是否输出sourcemap
      },
      {
        dir: "lib",
        format: "esm",
        entryFileNames: "[name].esm.js",
        sourcemap: false, // 是否输出sourcemap
        // globals: {
        //   assert: require.resolve("assert"),
        // },
      },
      {
        dir: "lib",
        format: "umd",
        entryFileNames: "[name].umd.js",
        name: "@ky/d2c", // umd模块名称，相当于一个命名空间，会自动挂载到window下面
        sourcemap: false,
        plugins: [terser()],
      },
    ],
    // external: [
    //   "stream",
    //   "http",
    //   "url",
    //   "punycode",
    //   "https",
    //   "zlib",
    //   "crypto",
    //   "fs",
    //   "util",
    //   "path",
    //   "events",
    //   "os",
    //   "domain",
    //   "string_decoder",
    //   "querystring",
    //   "tty",
    //   "net",
    //   "tls",
    //   "process",
    //   "http2",
    //   "assert",
    //   "buffer",
    //   "dns",
    //   "constants",
    //   "child_process",
    // ],
    plugins: [
      // define({
      //   replacements: {
      //     // "process.env": JSON.stringify({}),
      //     // "process.env": "cc",
      //     // "process.version": "v14.0.0",
      //   },
      // }),
      json(),
      polyFillNode(),
      resolve({
        browser: true,
      }),
      commonjs(),
      typescript({ module: "ESNext" }),
    ],
  },
];
