import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()]
  },
  app: {
    head: {
      title: "Ashley Queen Buba | Personal Website",
      meta: [
        { name: "description", content: "Get to know Ashley Queen Buba, her studies, interests, skills, and hobbies." }
      ]
    }
  }
});