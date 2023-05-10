# vue3-unocss-component-starter

Features:

- 🛠 [Vue 3](https://v3.vuejs.org/guide/introduction.html)
- ⚡️ [Vite](https://vitejs.dev/guide/)
- 🗂 [PNPM](https://pnpm.io)
- 🎨 [UnoCSS](https://github.com/antfu/unocss)
- 🛣 [Vue Router](https://github.com/vuejs/vue-router-next)
- 🍍 [Pinia](https://pinia.vuejs.org/)
- 🔡 [Inter var font](https://rsms.me/inter/)
- 📄 [Github pages action](https://pages.github.com)
- 🦾 TypeScript
- 🧲 Fetch API
- ⭐️ Basic Components
- [antfu/eslint-config](https://github.com/antfu/eslint-config)

## Github pages

The default github action will build to `gh-page` when pushing on `main` branch.

For a project page, the base path of the repository must be specified. Add the following variable in the Github repository Settings > Secrets and variables > Actions

| Name                        | Value                    |
| --------------------------- | ------------------------ |
| VITE_BASE_PUBLIC_PATH       | `/repository-name/`      |
