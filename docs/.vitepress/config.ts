import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "@evionica/repository - Documentation",
  description: "@evionica/repository",
  outDir: '../public',
  base: '/repository/',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Architecture', link: '/arch/' },
      { text: 'API', link: '/api/' },
    ]
  }
})
