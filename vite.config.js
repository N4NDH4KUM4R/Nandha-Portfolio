import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.docx"], // Handle .docx files as assets
  server: {
    port: 3007,
    host: true,
  },
  base: "/Nandha-Portfolio/",
});
