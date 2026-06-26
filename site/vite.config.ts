import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// GitHub Pages serve este repositório em https://evalente82.github.io/ETECs-ICTIM/
// Por isso o base path precisa apontar para o subdiretório do repositório.
export default defineConfig({
  base: "/ETECs-ICTIM/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
