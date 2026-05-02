import { useState, useEffect } from 'react'
import { loadIndex, clearCache } from '@/services/data'
import type { CategoryIndex } from '@/services/data'
import { getErrorMessage } from '@/utils/error'

export function useConfigs() {
  const [index, setIndex] = useState<CategoryIndex[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const refresh = async () => {
    setLoading(true)
    setError(null)
    clearCache()
    try {
      const idx = await loadIndex()
      setIndex(idx)
    } catch (e) {
      setError(getErrorMessage(e))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    refresh()
  }, [])

  return { index, loading, error, refresh }
}
