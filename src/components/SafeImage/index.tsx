import { useState } from 'react'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

interface SafeImageProps {
  src: string
  className?: string
  mode?: 'scaleToFill' | 'aspectFit' | 'aspectFill' | 'widthFix' | 'heightFix'
  lazyLoad?: boolean
  onClick?: () => void
}

export default function SafeImage({ src, className = '', mode = 'aspectFill', lazyLoad, onClick }: SafeImageProps) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <View className={`${className} safe-image--fallback`}>
        <Text>📖</Text>
      </View>
    )
  }

  return (
    <Image
      className={className}
      src={src}
      mode={mode}
      lazyLoad={lazyLoad}
      onClick={onClick}
      onError={() => setError(true)}
    />
  )
}
