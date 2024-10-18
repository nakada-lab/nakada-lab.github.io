/**
 * [タグのID]: 表示名
 */
export const tags = {
  astro: 'Astro',
  atcoder: 'AtCoder',
  javascript: 'JavaScript',
  music: 'Music',
  python: 'Python',
  react: 'React',
  typescript: 'TypeScript',
  announcement: 'Announcement',
  achievement: 'Achievement',
  research: 'Research'
} satisfies { [key: string]: string }

export function getTagName(key: string) {
  return tags[key as keyof typeof tags]
}
