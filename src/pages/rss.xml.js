import { SITE_DESCRIPTION, SITE_TITLE } from '@/consts'
import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
  const posts = await getCollection('blog')
  return rss({
    description: SITE_DESCRIPTION,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}`,
      pubDate: new Date(post.data.date).toUTCString(),
    })),
    site: context.site,
    title: SITE_TITLE,
  })
}
