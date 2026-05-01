import { View, Text } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { loadAllCategories } from '@/services/data'
import type { Book } from '@/services/data'
import { useFavorites } from '@/hooks/useFavorites'
import BookCard from '@/components/BookCard'
import './index.scss'

export default function FavoritesPage() {
  const { favorites, isFavorite } = useFavorites()
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (favorites.length === 0) {
      setBooks([])
      setLoading(false)
      return
    }

    const load = async () => {
      try {
        const all = await loadAllCategories()
        const favSet = new Set(favorites)
        setBooks(all.filter((b) => favSet.has(b.id)))
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [favorites])

  const goToDetail = (book: Book) => {
    Taro.navigateTo({ url: `/pages/detail/index?id=${encodeURIComponent(book.id)}` })
  }

  return (
    <View className="favorites-page">
      {loading ? (
        <Text className="favorites-page__hint">加载中...</Text>
      ) : books.length === 0 ? (
        <View className="favorites-page__empty">
          <Text>还没有收藏书籍</Text>
          <Text className="favorites-page__empty-sub">浏览书籍时点击 ♡ 即可收藏</Text>
        </View>
      ) : (
        <View className="favorites-page__list">
          {books.map((book) => (
            <BookCard key={book.id} book={book} onClick={goToDetail} />
          ))}
        </View>
      )}
    </View>
  )
}
