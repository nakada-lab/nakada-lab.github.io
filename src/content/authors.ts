/**
 * [GitHubのID]: 表示名
 */
export const authors = {
  hiroaki222: 'hiroaki222',
  remikon: 'レミコン',
  shallow90125: 'shallow90125',
  'takashi-nakada': 'Takashi Nakada',
  'tell-net': 'tell-net',
  TF210161: 'TF210161',
  Yamabooks: 'Yamabooks',
  zary0: 'Ozawa Ryota',
} satisfies { [key: string]: string }

export function getAuthorName(key: string) {
  return authors[key as keyof typeof authors]
}
