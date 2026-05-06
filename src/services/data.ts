import Taro from '@tarojs/taro'
import { INDEX_URL, CDN_BASE, toProxyUrl } from '@/constants/cdn'

export interface Book {
  id: string
  name: string
  author: string
  type: string
  picUrl: string
  bd_link: string
  brief: string
  addedAt: string
}

export interface CategoryIndex {
  type: string
  count: number
}

const categoryCache = new Map<string, Book[]>()
let indexCache: CategoryIndex[] | null = null

async function fetchJSON<T>(url: string): Promise<T> {
  const res = await Taro.request({ url, method: 'GET' })
  if (res.statusCode !== 200) {
    throw new Error(`请求失败: ${res.statusCode}`)
  }
  return res.data as T
}

export async function loadIndex(): Promise<CategoryIndex[]> {
  if (indexCache) return indexCache
  indexCache = await fetchJSON<CategoryIndex[]>(toProxyUrl(INDEX_URL))
  return indexCache!
}

export async function loadCategory(type: string): Promise<Book[]> {
  if (categoryCache.has(type)) return categoryCache.get(type)!
  const url = `${CDN_BASE}/${type}.json`
  const books = await fetchJSON<Book[]>(toProxyUrl(url))
  categoryCache.set(type, books)
  return books
}

export async function loadAllCategories(): Promise<Book[]> {
  const index = await loadIndex()
  const loaded: Book[][] = await Promise.all(
    index.map(async ({ type }) => {
      if (categoryCache.has(type)) return categoryCache.get(type)!
      const books = await fetchJSON<Book[]>(toProxyUrl(`${CDN_BASE}/${type}.json`))
      categoryCache.set(type, books)
      return books
    }),
  )
  return loaded.flat()
}

export function clearCache(): void {
  categoryCache.clear()
  indexCache = null
}
