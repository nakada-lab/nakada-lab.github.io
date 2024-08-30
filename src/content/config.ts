import { defineCollection, z } from 'astro:content'

import { authors } from './authors'
import { tags } from './tags'

const blog = defineCollection({
  schema: z.object({
    author: z.enum(Object.keys(authors) as [string, ...string[]]),
    date: z.coerce.date(),
    tags: z.array(z.enum(Object.keys(tags) as [string, ...string[]])),
    title: z.string(),
  }),
  type: 'content',
})

export const collections = { blog }
