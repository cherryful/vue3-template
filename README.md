# vue3-starter

It doesn't need to be too complicated, simple is great.

Features:

- 🛠 [Vue 3](https://v3.vuejs.org/guide/introduction.html) + [Vite](https://vitejs.dev/guide/) + [Vue Router](https://github.com/vuejs/vue-router-next) + [Pinia](https://pinia.vuejs.org/) + [VueUse](https://vueuse.org/) + [PNPM](https://pnpm.io)
- 🎨 [UnoCSS](https://github.com/antfu/unocss) + ⭐ [UnoCSS UI](https://github.com/cherryful/unocss-ui) 
- 🧹 [@antfu/eslint-config](https://github.com/antfu/eslint-config) + [@unocss/eslint-config](https://github.com/unocss/unocss/tree/main/packages/config), no Prettier
- 🦾 TypeScript + Fetch API
- 📄 [Github pages action](https://pages.github.com)
- 🫡 [simple-git-hooks](https://www.npmjs.com/package/simple-git-hooks) + [lint-staged](https://www.npmjs.com/package/lint-staged)

## Github pages

The default github action will build to `gh-page` when pushing on `main` branch.

For a project page, the base path of the repository must be specified. Add the following variable in the Github repository Settings > Secrets and variables > Actions

| Name                        | Value                    |
| --------------------------- | ------------------------ |
| VITE_BASE_PUBLIC_PATH       | `/repository-name/`      |
