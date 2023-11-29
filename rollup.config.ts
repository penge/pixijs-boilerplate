import { type RollupOptions } from "rollup"
import del from "rollup-plugin-delete"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import nodePolyfills from "rollup-plugin-polyfill-node"
import typescript from "@rollup/plugin-typescript"
import sourcemaps from "rollup-plugin-sourcemaps"
import copy from "rollup-plugin-copy"
import serve from "rollup-plugin-serve"
import livereload from "rollup-plugin-livereload"

const config: RollupOptions = {
  input: "src/main.ts",
  output: {
    dir: "out",
    format: "module",
    sourcemap: true
  },
  external: "pixi.js",
  plugins: [
    del({ targets: "out/*", runOnce: true }),
    resolve({
      preferBuiltins: false
    }),
    commonjs(),
    nodePolyfills(),
    typescript(),
    sourcemaps(),
    copy({
      targets: [
        { src: "public/**/*", dest: "out" },
        { src: "node_modules/pixi.js/dist/pixi.min.js", dest: "out", rename: "pixi.js" }
      ]
    }),
    serve("out"),
    livereload("out")
  ]
}

export default config
