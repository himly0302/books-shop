import { useState, useCallback } from 'react'
import Taro, { useDidShow } from '@tarojs/taro'
import { STORAGE_KEYS, MAX_HISTORY } from '@/constants/cdn'

export interface HistoryItem {
  id: string
  name: string
  picUrl: string
}

function readHistory(): HistoryItem[] {
  try {
    return Taro.getStorageSync(STORAGE_KEYS.history) || []
  } catch {
    return []
  }
}

export function useHistory() {
  const [history, setHistory] = useState<HistoryItem[]>(readHistory)

  useDidShow(() => {
    setHistory(readHistory())
  })

  const add = useCallback((item: HistoryItem) => {
    setHistory((prev) => {
      const filtered = prev.filter((h) => h.id !== item.id)
      const next = [item, ...filtered].slice(0, MAX_HISTORY)
      Taro.setStorageSync(STORAGE_KEYS.history, next)
      return next
    })
  }, [])

  const clear = useCallback(() => {
    setHistory([])
    Taro.removeStorageSync(STORAGE_KEYS.history)
  }, [])

  return { history, add, clear }
}
