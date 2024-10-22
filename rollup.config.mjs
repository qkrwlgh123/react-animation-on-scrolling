import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import { visualizer } from "rollup-plugin-visualizer";

export default {
  input: "src/useAnimationOnVisible.ts",
  output: [
    {
      file: "dist/bundle.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/bundle.esm.js",
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    typescript(),
    terser(), // 코드 압축
    visualizer({ open: true }), // 번들 분석
  ],
  external: ["react", "react-dom"],
};
