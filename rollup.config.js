import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "src/TabularDropdown.jsx", // entry point
  output: [
    {
      file: "dist/index.js",
      format: "cjs", // CommonJS module format
      exports: "default",
      sourcemap: true, // Generate source maps for easier debugging
    },
    {
      file: "dist/index.es.js", // This creates the ES Module version
      format: "esm",
      sourcemap: true,
    },
  ],
  external: ["react", "react-dom"], // Avoid bundling React & ReactDOM
  plugins: [
    external(), // Ensure peer dependencies are external
    postcss({
      modules: true, // Enable CSS Modules (Optional based on your use case)
      extract: true, // Extract the CSS into its own file if needed
    }),
    babel({
      exclude: "node_modules/**", // Don't transpile node_modules
      presets: [
        "@babel/preset-env", // For modern JavaScript
        "@babel/preset-react", // For JSX
      ],
      plugins: ["@babel/plugin-transform-runtime"], // Helps with polyfilling
      runtimeHelpers: true, // Enable runtime helpers
    }),
    resolve(), // Resolve Node.js modules
    commonjs(), // Convert CommonJS modules to ES6 for bundling
  ],
};
