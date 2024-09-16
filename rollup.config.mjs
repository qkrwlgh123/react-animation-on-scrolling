import typescript from "@rollup/plugin-typescript";

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
  plugins: [typescript()],
  external: ["react", "react-dom"],
};
