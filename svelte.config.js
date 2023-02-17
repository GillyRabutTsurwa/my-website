// import adapter from "@sveltejs/adapter-auto"; NOTE: not using this for now.
import adapter from "@sveltejs/adapter-netlify";
import preprocessor from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      edge: false,
      split: false,
    }),
  },
  preprocess: preprocessor({
    scss: {
      prependData: "@import './src/lib/sass/main.scss';",
    },
  }),
};

export default config;
