import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import icon from 'astro-icon'

/** @type {string[]} */
const ignorePaths = []
const site = 'https://nakada-lab.github.io'

/** @type {(page: string) => boolean} */
function filter(page) {
  return ignorePaths.includes(page.replace(site, ''))
}

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    sitemap({
      filter,
    }),
    tailwind(),
    icon(),
  ],
  site,
})
