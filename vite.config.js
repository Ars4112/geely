import vituum from "vituum";
import posthtml from "@vituum/vite-plugin-posthtml";
import components from "posthtml-component";
import tailwindcss from "@vituum/vite-plugin-tailwindcss";

export default {
  plugins: [
    vituum(),
    posthtml({
      root: "./src",
      plugins: [
        components({
          root: "./src",
          tagPrefix: "c-",
          folders: ["components", "layouts"],
        }),
      ],
    }),
    tailwindcss(),
  ],
};
